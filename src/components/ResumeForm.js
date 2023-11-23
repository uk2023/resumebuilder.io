import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BoltIcon from '@mui/icons-material/Bolt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonalInfo from './PersonalInfo';
import WorkExperience from './WorkExperience';
import Education from './Education';
import KeySkills from './KeySkills';
import Courses from './courses'; // Fixed the import
import './ResumeForm.css'; // Import your custom CSS for styling

const ResumeForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const { template } = useParams(); // Extracting template from the URL

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    workExperience: [],
    education: [],
    keySkills: [],
    courses: [], // Fixed the syntax
  });

  const listItems = [
    { primary: 'Personal Info', icon: <AccountCircleIcon />, onClick: () => setStep(1) },
    { primary: 'Work Experience', icon: <WorkIcon />, onClick: () => setStep(2) },
    { primary: 'Education', icon: <ApartmentIcon />, onClick: () => setStep(3) },
    { primary: 'Key Skills', icon: <BoltIcon />, onClick: () => setStep(4) },
    { primary: 'Courses', icon: <AssignmentIcon />, onClick: () => setStep(5) },
    { primary: 'Preview', icon: <VisibilityIcon />, onClick: () => setStep(6) },
  ];

  const handlePersonalInfoSubmit = (data) => {
    setFormData({ ...formData, personalInfo: data });
    setStep(2);
  };

  const handleWorkExperienceSubmit = (data) => {
    setFormData({ ...formData, workExperience: data });
    setStep(3);
  };

  const handleEducationSubmit = (data) => {
    setFormData({ ...formData, education: data });
    setStep(4);
  };

  const handleKeySkillsSubmit = (data) => {
    setFormData({ ...formData, keySkills: data });
    setStep(5);
  };

  const handleCoursesSubmit = (data) => {
    setFormData({ ...formData, courses: data });
    setStep(6);
  };

  const handleFormSubmit = () => {
    // Navigate to ResumePreview page with form data and selected template
    navigate(`/resume-preview/${template}`, { state: { formData, selectedTemplate: template } });
  };

  return (
    <div className="resume-form-container">
      <div className="list-container">
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {listItems.map((item, index) => (
            <div key={index}>
              <ListItem
                button
                onClick={item.onClick}
                className={step === index + 1 ? 'active-section' : ''}
              >
                <ListItemAvatar>
                  <Avatar>{item.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.primary} />
              </ListItem>
              {index < listItems.length - 1 && (
                <Divider
                  variant="inset"
                  component="li"
                  className={step === index + 1 ? 'active-divider' : ''}
                />
              )}
            </div>
          ))}
        </List>
      </div>
      <div className="content-container">
        {step === 1 && <PersonalInfo register={register} onSubmit={handlePersonalInfoSubmit} />}
        {step === 2 && <WorkExperience register={register} onSubmit={handleWorkExperienceSubmit} />}
        {step === 3 && <Education register={register} onSubmit={handleEducationSubmit} />}
        {step === 4 && <KeySkills register={register} onSubmit={handleKeySkillsSubmit} />}
        {step === 5 && <Courses register={register} onSubmit={handleCoursesSubmit} />}
        {step === 6 && (
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Additional form fields can be added here */}
            <button className="cta-button" type="submit">Preview</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResumeForm;
