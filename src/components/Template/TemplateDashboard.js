import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTemplate } from './../../actions/actions';
import { Link } from 'react-router-dom';
import { Card, CardActions, CardMedia, Button, Typography, Container } from '@mui/material';

import './TemplateDashboard.css';

import template1 from './../../assets/template1.jpg';
import template2 from './../../assets/template2.png';
import template3 from './../../assets/template3.png';
import template4 from './../../assets/template4.png';

const templateData = [
  {
    id: 'template1',
    imageUrl: template1,
  },
  {
    id: 'template2',
    imageUrl: template2,
  },
  {
    id: 'template3',
    imageUrl: template3,
  },
  {
    id: 'template4',
    imageUrl: template4,
  },
];

const TemplateDashboard = () => {
  const dispatch = useDispatch();
  const selectedTemplate = useSelector((state) => state.template);

  const handleTemplateSelection = (templateId) => {
    dispatch(setTemplate(templateId));
  };

  return (
    <Container className="template-dashboard-container">
      <div className='margin'>
        <Typography variant="h3">Templates</Typography>
      </div>
      <div className='margin2'>
      <Typography variant="h8">Select a Template to get Started</Typography>
      </div>
      <div className="template-options">
        {templateData.map((template) => (
          <Card
            key={template.id}
            className={`card ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => handleTemplateSelection(template.id)}
          >
            <CardMedia
              component="img"
              height="340"
              image={template.imageUrl}
              alt={template.title}
              className="card-media"
            />
            <CardActions className="card-actions">
              <Link to={`/resume-form/${template.id}`}>
                <Button variant="contained" color="primary">
                  Use Template
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default TemplateDashboard;
