import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from "react";
import Alert from './components/Alert';
import NoteState from "./context/notes/NoteState";
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000)
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert = {alert}/>
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home showAlert = {showAlert}/>} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert = {showAlert} />} />
              <Route exact path="/signup" element={<Signup showAlert = {showAlert} />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
