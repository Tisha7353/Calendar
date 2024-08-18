
import { useContext, useState } from "react";
import Calendar from "react-calendar";
import { EventContext } from "../context/EventContext";
import EventForm from "./EventForm";
import EventDetailsModal from "./EventDetailsModal";
import FilterEvents from "./FilterEvents";
import "react-calendar/dist/Calendar.css";
import "../index.css"; // For custom styles

const CalendarView = () => {
  const { events } = useContext(EventContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filter, setFilter] = useState("All");

  // Filter events based on category
  const filteredEvents =
    filter === "All" ? events : events.filter((event) => event.category === filter);

  // Format selected date to match event date format
  const formattedSelectedDate = selectedDate.toISOString().split('T')[0]; // 'yyyy-MM-dd'
  const eventsForSelectedDate = filteredEvents.filter(
    (event) => event.date === formattedSelectedDate
  );

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const now = new Date();
      if (date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) {
        return 'current-month';
      } else {
        return 'other-month';
      }
    }
    return null;
  };

  return (
    <div className="container">
      <h1 className="text-3xl font-bold text-center mb-6">Calendar</h1>
      <EventForm />
      <FilterEvents setFilter={setFilter} />
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileContent={({ date, view }) => {
          if (view === "month") {
            const dateStr = date.toISOString().split('T')[0];
            const hasEvents = filteredEvents.some(event => event.date === dateStr);
            return hasEvents ? <div className="dot"></div> : null;
          }
          return null;
        }}
        tileClassName={tileClassName}
      />
      <div className="events-list">
        <h2>Events for {formattedSelectedDate}</h2>
        {eventsForSelectedDate.map((event) => (
          <div
            key={event.id}
            className="event-item"
            onClick={() => setSelectedEvent(event)}
          >
            <h3>{event.title}</h3>
            <p>{event.category}</p>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} closeModal={() => setSelectedEvent(null)} />
      )}
    </div>
  );
};

export default CalendarView;
