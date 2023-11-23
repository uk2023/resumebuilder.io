import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateWorkExperience } from './../actions/actions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const WorkExperience = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [experiences, setExperiences] = useState([{ jobTitle: '', company: '', startDate: '', endDate: '' }]);

  const submitHandler = (data) => {
    // Handle the form submission logic here
    dispatch(updateWorkExperience(data.experiences));
    onSubmit();
  };

  const addExperienceRow = () => {
    setExperiences([...experiences, { jobTitle: '', company: '', startDate: '', endDate: '' }]);
  };

  const goBack = () => {
    // Implement logic to go back if needed
    console.log('Go Back');
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(submitHandler)}
    >
      {/* Header */}
      <Typography variant="h5" gutterBottom>
        Work Experience
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />

      {/* Form Fields */}
      {experiences.map((experience, rowIndex) => (
        <Box key={rowIndex} sx={{ marginBottom: rowIndex < experiences.length - 1 ? 2 : 0 }}>
          <TextField
            {...register(`experiences[${rowIndex}].jobTitle`, { required: 'Job Title is required' })}
            id={`outlined-basic-jobTitle-${rowIndex}`}
            label={`Job Title`}
            variant="outlined"
            margin="normal"
            error={Boolean(errors.experiences && errors.experiences[rowIndex]?.jobTitle)}
            helperText={errors.experiences && errors.experiences[rowIndex]?.jobTitle ? errors.experiences[rowIndex]?.jobTitle.message : ''}
          />
          {/* ... (similar structure for other fields) */}
          <TextField
            {...register(`experiences[${rowIndex}].company`, { required: 'Company is required' })}
            id={`outlined-basic-company-${rowIndex}`}
            label={`Organization Name`}
            variant="outlined"
            margin="normal"
            error={Boolean(errors.experiences && errors.experiences[rowIndex]?.company)}
            helperText={errors.experiences && errors.experiences[rowIndex]?.company ? errors.experiences[rowIndex]?.company.message : ''}
          />
          <TextField
            {...register(`experiences[${rowIndex}].startDate`, { required: 'Start Date is required' })}
            id={`outlined-basic-startDate-${rowIndex}`}
            label={`Start Date `}
            margin="normal"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            error={Boolean(errors.experiences && errors.experiences[rowIndex]?.startDate)}
            helperText={errors.experiences && errors.experiences[rowIndex]?.startDate ? errors.experiences[rowIndex]?.startDate.message : ''}
          />
          <TextField
            {...register(`experiences[${rowIndex}].endDate`, { required: 'End Date is required' })}
            id={`outlined-basic-endDate-${rowIndex}`}
            label={`End Date `}
            type="date"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            error={Boolean(errors.experiences && errors.experiences[rowIndex]?.endDate)}
            helperText={errors.experiences && errors.experiences[rowIndex]?.endDate ? errors.experiences[rowIndex]?.endDate.message : ''}
          />
          {/* Add Experience Button */}
          
          <Divider sx={{ margin: 1 }} />
        </Box>
      ))}

      <div>
        <Button variant="text" sx={{ marginRight: 2, marginTop: 2 }} onClick={addExperienceRow}>
            Add Experience
          </Button>
      </div>
      <div>
        <Button type="button" variant="outlined" sx={{ margin: 1, marginTop: 1 }} onClick={goBack}>
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary" >
          Next
        </Button>
      </div>
    </Box>
  );
};

export default WorkExperience;
