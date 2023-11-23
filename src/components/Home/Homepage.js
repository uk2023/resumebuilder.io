import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import { Typography, Grid } from '@mui/material';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="content">
        <Typography variant="h2" gutterBottom>
          Welcome to <span className="brand">ResumeBuilder!</span>
        </Typography>
        <div className='row'>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h8" paragraph>
                 Your pathway to professional success starts here. Craft impressive resumes effortlessly with our AI-powered resume builder.
              </Typography>
              <div className="feature-container">
                <Typography variant="h4">Key Features</Typography>
                <Typography variant="h6">
                  <ul>
                    <li>AI-Powered Precision</li>
                    <li>Effortless Efficiency</li>
                    <li>Tailored Customization</li>
                    <li>Boosted Confidence</li>
                 </ul>
                </Typography>
                <Link to="/templates" className="cta-button">
                  Get Started
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div>
                <img
                  src="https://img.freepik.com/free-vector/online-resume-concept-illustration_114360-5166.jpg?w=740&t=st=1698838920~exp=1698839520~hmac=de38dc5024764723a4deea49e28c142593d0996d3ada1e9d62534417daa8a340"
                  alt="ResumeBuildr.io Interface"
                  className="responsive-img"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
