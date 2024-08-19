
import {  HashRouter as Router, Route, Routes, HashRouter } from "react-router-dom";
import CalendarView from "./components/CalendarView";
import EventProvider from "./context/EventContext";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const App = () => {
  return (
    <EventProvider>
    <HashRouter>
        <Routes>
          <Route path="/" element={<CalendarView />} />
        </Routes>
        {/* Add ToastContainer here */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </HashRouter>
    </EventProvider>
  );
};

export default App;
