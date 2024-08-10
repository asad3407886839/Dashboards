// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AddProject from './components/AddProject/AddProject';
import Team from './components/Teams/Team';
import Logouts from './components/Sidebar/Logout/Logouts';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/addProject"element ={<AddProject/>} />
          <Route path="/team"element ={<Team/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact"element ={<Contact/>} />
          <Route path="/logout"element ={<Logouts/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
