import { render, screen, fireEvent } from '@testing-library/react';
import CalendarView from './CalendarView';
import { EventContext } from '../context/EventContext';

const mockEvents = [
  { id: 1, title: 'Event 1', date: '2024-08-18', category: 'Work' },
  { id: 2, title: 'Event 2', date: '2024-08-19', category: 'Personal' },
];

test('renders CalendarView and displays events', () => {
  render(
    <EventContext.Provider value={{ events: mockEvents }}>
      <CalendarView />
    </EventContext.Provider>
  );

  // Verify that events are rendered
  expect(screen.getByText(/Events for 2024-08-18/i)).toBeInTheDocument();
  expect(screen.getByText(/Event 1/i)).toBeInTheDocument();
  expect(screen.getByText(/Event 2/i)).toBeInTheDocument();
});


