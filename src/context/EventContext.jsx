import { createContext, useState } from "react";

export const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    // Example event data
    { id: 1, title: "Meeting", date: "2024-08-20", category: "Work" },
    { id: 2, title: "Birthday", date: "2024-08-22", category: "Personal" },
  ]);

  const addEvent = (event) => setEvents([...events, event]);

  const editEvent = (updatedEvent) =>
    setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)));

  const deleteEvent = (eventId) =>
    setEvents(events.filter((event) => event.id !== eventId));

  return (
    <EventContext.Provider value={{ events, addEvent, editEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;
