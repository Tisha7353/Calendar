import { render, screen, fireEvent } from '@testing-library/react';
import EventForm from './EventForm';
import { EventContext } from '../context/EventContext';

const mockAddEvent = jest.fn();

test('renders EventForm and adds an event', () => {
  render(
    <EventContext.Provider value={{ addEvent: mockAddEvent }}>
      <EventForm />
    </EventContext.Provider>
  );

  const titleInput = screen.getByPlaceholderText(/Event Title/i);
  const dateInput = screen.getByLabelText(/Date/i); // If you have a label for date
  const categorySelect = screen.getByRole('combobox');
  const submitButton = screen.getByText(/Add Event/i);

  fireEvent.change(titleInput, { target: { value: 'Meeting' } });
  fireEvent.change(dateInput, { target: { value: '2024-08-20' } });
  fireEvent.change(categorySelect, { target: { value: 'Work' } });
  fireEvent.click(submitButton);

  expect(mockAddEvent).toHaveBeenCalledWith({
    id: expect.any(Number), // Adjust according to your ID generation
    title: 'Meeting',
    date: '2024-08-20',
    category: 'Work'
  });
});

