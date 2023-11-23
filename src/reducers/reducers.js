// reducer.js

import Avtar1  from './../assets/avtar.png';

import {
  UPDATE_PERSONAL_INFO,
  UPDATE_WORK_EXPERIENCE,
  UPDATE_EDUCATION,
  UPDATE_KEY_SKILLS,
  SET_TEMPLATE,
  UPDATE_COURSES, // Include the new action type
  
} from './../actions/actions';



const initialState = {
  personalInfo: {},
  workExperience: [],
  education: {},
  keySkills: [],
  selectedTemplate: '',
  courses: [], // Include the new state property for courses
  profilePhoto: Avtar1, // Initial profile photo URL
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE_PHOTO':
      return {
        ...state,
        profilePhoto: action.payload,
      };
    case UPDATE_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: action.payload,
      };
    case UPDATE_WORK_EXPERIENCE:
      return {
        ...state,
        workExperience: action.payload,
      };
    case UPDATE_EDUCATION:
      return {
        ...state,
        education: action.payload,
      };
    case UPDATE_KEY_SKILLS:
      return {
        ...state,
        keySkills: action.payload,
      };
    case SET_TEMPLATE:
      return {
        ...state,
        selectedTemplate: action.payload,
      };
      case UPDATE_COURSES:
        return {
          ...state,
          courses: action.payload,
        };

    default:
      return state;
  }
};

export default rootReducer;
