import React from 'react';
import './AboutUs.css';
import IMG from './../../assets/about.gif';
import { LinkedIn, Instagram, WhatsApp, Facebook } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

const AboutUs = () => {
  return (
    <div className='main-about'>
      <div className="about-us-container" >
      <div className="content5">
        <Typography variant="h2">
          Resume
        </Typography>
        <Typography variant="h2" style={{ marginBottom: '20px' }}>
          Builder
        </Typography>
        <Typography style={{ marginBottom: '20px' }}>
          Welcome to our Resume Builder application! We are dedicated to helping you create a professional and
          impressive resume that showcases your skills and experiences. With our user-friendly interface and
          customizable templates, you can create a standout resume in no time.
        </Typography>
        <Typography style={{ marginBottom: '20px' }}>
          Our mission is to simplify the resume-building process, making it easy for job seekers to create compelling
          resumes that catch the attention of employers. Wheher you are a recent graduate, a seasoned professional, or
          anywhere in between, our Resume Builder is designed to meet your needs.
        </Typography>
        <Typography variant="h5" style={{ marginBottom: '10px' }}>
          Share with your friends:
        </Typography>
        <div className="social-icons">
          <LinkedIn className="icon" />
          <Instagram className="icon" />
          <WhatsApp className="icon" />
          <Facebook className="icon" />
        </div>
      </div>
      <div className="image-container">
        <img src={IMG} alt="Company Logo" />
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
