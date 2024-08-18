import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import { toast } from 'react-toastify'; // Import toast

const EventForm = () => {
  const { addEvent } = useContext(EventContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert the input date to ISO string and then format it to 'yyyy-MM-dd'
    const formattedDate = date;
    console.log("Submitted date:", formattedDate);

    // Add the event with the correctly formatted date
    addEvent({ id: Date.now(), title, date: formattedDate, category });

    // Clear the form inputs
    setTitle("");
    setDate("");

    // Show a success toast
    toast.success("Event added successfully!"); // Show success toast
  };

  return (
    <form onSubmit={handleSubmit} className="event-form">
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
