import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import React from "react";
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
  return (
    <>
    <NoteState>
      <Router>
        <Navbar />
        <Alert message = {"Hello my friend"}/>
        <div className="container">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
        </div>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
