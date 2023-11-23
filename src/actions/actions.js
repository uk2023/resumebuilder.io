export const UPDATE_PERSONAL_INFO = 'UPDATE_PERSONAL_INFO';
export const UPDATE_WORK_EXPERIENCE = 'UPDATE_WORK_EXPERIENCE';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';
export const UPDATE_KEY_SKILLS = 'UPDATE_KEY_SKILLS';
export const SET_TEMPLATE = 'SET_TEMPLATE';

export const UPDATE_COURSES = 'UPDATE_COURSES';

export const updateCourses = (courses) => {
  return { 
    type: UPDATE_COURSES,
    payload: courses,
  };
};

export const updatePersonalInfo = (info) => {
  return {
    type: UPDATE_PERSONAL_INFO,
    payload: info,
  };
};

export const updateWorkExperience = (experience) => {
  return {
    type: UPDATE_WORK_EXPERIENCE,
    payload: experience,
  };
};

export const updateEducation = (education) => {
  return {
    type: UPDATE_EDUCATION,
    payload: education,
  };
};

export const updateKeySkills = (skills) => {
  return {
    type: UPDATE_KEY_SKILLS,
    payload: skills,
  };
};

export const setTemplate = (template) => {
  return {
    type: SET_TEMPLATE,
    payload: template,
  };
};

// actions.js

export const updateProfilePhoto = (photoUrl) => {
  return {
    type: 'UPDATE_PROFILE_PHOTO',
    payload: photoUrl,
  };
};


