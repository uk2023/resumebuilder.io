import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Template1 from './Template/Template';
import Template2 from './Template/Template2';
import Template3 from './Template/Template3';
import Template4 from './Template/Template4';
import Box from '@mui/material/Box';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './ResumePreview.css';

const ResumePreview = () => {
  const { template } = useParams();
  const navigate = useNavigate();
  const [fileName, setFileName] = useState('');
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isSaveSuccessModalOpen, setIsSaveSuccessModalOpen] = useState(false);
  const pdfRef = useRef();

  const handleSaveResume = () => {
    if (fileName) {
      // Create a new jsPDF instance with A4 dimensions (in points)
      const doc = new jsPDF({
        format: 'a4',
      });

      // Get the content of the selected template component as HTML
      const content = pdfRef.current;

      // Calculate the scale factor to fit the content within the PDF page height
      const scaleFactor = doc.internal.pageSize.height / content.offsetHeight;

      // Generate PDF from the HTML content
      doc.html(content, {
        x: 4, // Set the X coordinate to 0
        y: -1.5, // Set the Y coordinate to 0

        html2canvas: {
          scale: scaleFactor, // Apply the calculated scale factor
        },
        callback: function (doc) {
          // Save the PDF with the specified file name
          doc.save(`${fileName}.pdf`);
          // Show save success modal
          setIsSaveSuccessModalOpen(true);
        },
      });
    } else {
      alert('Please enter a file name to save the resume.');
    }
  };

  const closeSaveSuccessModal = () => {
    setIsSaveSuccessModalOpen(false);
  };

  let selectedTemplateComponent;

  if (template === 'template1') {
    selectedTemplateComponent = <Template1 />;
  } else if (template === 'template2') {
    selectedTemplateComponent = <Template2 />;
  } else if (template === 'template3') {
    selectedTemplateComponent = <Template3 />;
  } else if (template === 'template4') {
    selectedTemplateComponent = <Template4 />;
  } else {
    selectedTemplateComponent = <div>Invalid Template</div>;
  }

  const openPreviewModal = () => {
    setIsPreviewModalOpen(true);
  };

  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
  };

  return (
    <div className="resume-preview-container">
      <div className="header">
        <Typography variant="h3" style={{ marginBottom: 30 }}>Resume Preview</Typography>
      </div>
      <div className="resume-content">
        <div className="left-pane">
          <label style={{ color: '#2c2a2a' }}>Create File Name:</label>
          <input
            type="text"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            placeholder="Enter file name"
          />
          <div className='row'>
            <button className="butt" onClick={() => navigate('/key-skills')}>Back</button>
            <button onClick={handleSaveResume}>Save</button>
          </div>
        </div>
        <div className="right-pane">
          <div className="template-wrapper" ref={pdfRef}>
            {selectedTemplateComponent}
            <button className="preview-button" onClick={openPreviewModal}>Preview</button>
          </div>
        </div>
      </div>

      {isPreviewModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closePreviewModal}>&times;</span>
            {selectedTemplateComponent}
          </div>
        </div>
      )}

      {/* Modal for save success alert */}
      <Modal open={isSaveSuccessModalOpen} onClose={closeSaveSuccessModal}>
        <Box className="modal-box">
          <CheckCircleOutlineIcon fontSize="large" color="success" />
          <Typography variant="h6" align="center">
            File saved successfully!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ResumePreview;
