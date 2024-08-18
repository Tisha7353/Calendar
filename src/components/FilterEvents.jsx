const FilterEvents = ({ setFilter }) => {
    return (
      <div className="mb-4">
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="All">All</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    );
  };
  
  export default FilterEvents;
  