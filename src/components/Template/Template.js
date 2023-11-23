// Template.js
import React from 'react';
import { useSelector } from 'react-redux';
import './Template1.css'; // Import the custom CSS file

const Template = () => {
  const personalInfo = useSelector((state) => state.personalInfo);
  const education = useSelector((state) => state.education);
  const keySkills = useSelector((state) => state.keySkills);
  const workExperiences = useSelector((state) => state.workExperience);
  const courses = useSelector(state => state.courses.courses);

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h2>{personalInfo.name}</h2>
        <p>The role you are applying for?</p>
        <p>
          <span>Phone - {personalInfo.phone} | </span>
          <span>Email - {personalInfo.email} | </span>
          <span>LinkedIn/Portfolio - None | </span>
          <span>Location - None</span>
        </p>
      </div>
      <div className="resume-summary">
        <div className="summary">
          <h4>Objective</h4>
          <hr />
          <p>{personalInfo?.objective}</p>
        </div>

        <div className="key-skills">
          <h4>Skills</h4>
          <hr />
          <p>{keySkills && keySkills.length > 0 ? keySkills.join(', ') : 'No skills available'}</p>
        </div>

        <div className="work-experiences">
          <h4>Work Experiences</h4>
          <hr />
          {workExperiences?.map((experience, index) => (
            <div key={index} className="experience">
              <p>
                Company Name: {experience?.company}
              </p>
              <p>
                Job Title: {experience?.jobTitle}
              </p>
              {/* Additional fields as needed */}
              <p>
                Date Period
                {experience?.startDate && <div><strong>Start Date:</strong> {experience.startDate}</div>}
                {experience?.endDate && <div><strong>End Date:</strong> {experience.endDate}</div>}
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
  );
};

export default Template;
