import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import About from './component/About';
import Test from './component/Test';
import Chatbot from './component/Chatbot';
import ContactUs from './component/ContactUs';

const App = () => (
  <Router>
    <Header />  
    <Routes>
      <Route path="/About" element={<About />} />
      {/* Other routes if needed */}
      <Route path="/test" element={<Test />} />
      <Route path="/ContactUs" element={<ContactUs/>} />
      <Route path="/Chatbot" element={<Chatbot/>} />
    </Routes>
  </Router>
);

export default App;
