import  { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";

const EventDetailsModal = ({ event, closeModal }) => {
  const { editEvent, deleteEvent } = useContext(EventContext);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(event.title);
  const [date, setDate] = useState(event.date);
  const [category, setCategory] = useState(event.category);

  const handleEdit = () => {
    editEvent({ ...event, title, date, category });
    setIsEditing(false);
    closeModal();
  };

  const handleDelete = () => {
    deleteEvent(event.id);
    closeModal();
  };

  return (
    <div className="modal">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{event.title}</h2>
          <p>{event.date}</p>
          <p>{event.category}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default EventDetailsModal;
