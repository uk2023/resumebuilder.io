import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import './Template4.css'; // Import the custom CSS file

const Template4 = () => {
  const personalInfo = useSelector(state => state.personalInfo);
  const education = useSelector(state => state.education);
  const keySkills = useSelector(state => state.keySkills);
  const workExperiences = useSelector(state => state.workExperience);
  const courses = useSelector(state => state.courses.courses);
  const imageUrl = useSelector(state => state.profilePhoto); // Use profilePhoto from Redux state

  return (
    <div className="template4-container">
      <div className="template4-header">
        <div className="avatar-section">
          <Avatar sx={{ width: 120, height: 120 }} alt="Profile Avatar" src={imageUrl} />
        </div>
        <div className="header-content">
          <h2>{personalInfo?.name}</h2>
          <p>
            <span>Phone - {personalInfo?.phone} | </span>
            <span>Email - {personalInfo?.email}</span>
            <p>Location - {personalInfo?.city}, {personalInfo?.state}</p>
          </p>
        </div>
      </div>
      <div className='content'>
      <div className="resume-summary4">
        <div className="summary">
          <h4>Objective</h4>
          <hr />
          <p>{personalInfo?.objective}</p>
        </div>

        <div className="key-skills">
          <h4>Skills</h4>
          <hr />
          <div className='skill'>
            {keySkills && keySkills.length > 0 ? (
              keySkills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))
            ) : (
              <p>No skills available</p>
            )}
          </div>
        </div>


        <div className="work-experiences">
          <h4>Work Experiences</h4>
          <hr />
          {workExperiences?.map((experience, index) => (
            <div key={index} className="experience">
              <div className="experience-header">
                <p>
                  <strong>{experience?.jobTitle}</strong>
                </p>
                <p className="date-period">
                  {experience?.startDate && <span>{experience.startDate}</span>}
                  {experience?.endDate && <span><strong> - </strong>{experience.endDate}</span>}
                </p>
              </div>
              <p>
                {experience?.company}
              </p>
            </div>
          ))}
          {(!workExperiences || workExperiences.length === 0) && <p>No work experiences available</p>}
        </div>


        <div className="education">
          <h4>Education</h4>
          <hr />
          <div className="edu">
            <p>
              <strong>{education?.degree}</strong>
            </p>

            <p>{education?.location}</p>
          </div>
          <div className="edu">
            <p>{education?.university}</p>
            <p>{education?.graduationYear && <div> {education.graduationYear}</div>}</p>
          </div>
        </div>
        <div className="courses">
          <h4>Courses & Certificates</h4>
          <hr />
          {courses?.map((course, index) => (
            <div key={index}>
              <p>
                <strong>{course?.title}</strong>
              </p>
              <p>
                Date Period
                {course?.startDate && <div>{course.startDate}</div>}
                {course?.endDate && <div>{course.endDate}</div>}
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Template4;
