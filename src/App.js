// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducers';
import PersonalInfo from './components/PersonalInfo';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import KeySkills from './components/KeySkills';
import Courses from './components/courses';
import AboutUs from './components/AboutUs/AboutUs';
import ResumeForm from './components/ResumeForm';
import Homepage from './components/Home/Homepage';
import ResumePreview from './components/ResumePreview';
import Resume from './components/Resume/Resume';
import TemplateDashboard from './components/Template/TemplateDashboard';


import Navbar from './components/Navbar/Navbar';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resumebuilder.io/" element={<Homepage />} />
          <Route path="/templates" element={<TemplateDashboard />} />
          <Route path="/resume-form/:template" element={<ResumeForm />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/key-skills" element={<KeySkills />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/resume-preview/:template" element={<ResumePreview />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
