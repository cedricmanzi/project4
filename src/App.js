import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
import Home from './components/Home';
import Profile from './components/Profile';
import './App.css';
import OnSubmit from './components/OnSubmit'
import Buble from './components/Buble'
import DynamicList from './components/DynamicList'
import Student1 from './components/Student1'
const App = () => {
  return (
    <UserProvider>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Student1">Student1</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/Onsubmit">OnSubmit</Link></li>
            <li><Link to="/dynamiclist">DynamicList</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Onsubmit" element={<OnSubmit />} />
          <Route path="/Buble" element={<Buble />} />
          <Route path="/dynamiclist" element={<DynamicList />} />
          <Route path="/Student1" element={<Student1 />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
