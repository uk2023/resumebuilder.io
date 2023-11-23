import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateEducation } from './../actions/actions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Education = ({ onSubmit, onBack }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    dispatch(updateEducation(data));
    onSubmit();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(submitHandler)}
      sx={{
        maxWidth: '500px',
        padding: '16px',
        margin: 'auto',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Education Details
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />

      <TextField
        {...register('degree', { required: 'Degree is required' })}
        id="outlined-basic-degree"
        label="Degree"
        variant="outlined"
        fullWidth
        margin="normal"
        error={Boolean(errors.degree)}
        helperText={errors.degree ? errors.degree.message : ''}
      />
      <TextField
        {...register('university', { required: 'University is required' })}
        id="outlined-basic-university"
        label="University"
        variant="outlined"
        fullWidth
        margin="normal"
        error={Boolean(errors.university)}
        helperText={errors.university ? errors.university.message : ''}
      />
      <TextField
        {...register('location')}
        id="outlined-basic-location"
        label="Location"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        {...register('graduationYear', { required: 'Graduation Year is required' })}
        id="outlined-basic-graduationYear"
        label="Graduation Year"
        variant="outlined"
        fullWidth
        margin="normal"
        error={Boolean(errors.graduationYear)}
        helperText={errors.graduationYear ? errors.graduationYear.message : ''}
      />
      <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

      <Button type="button" variant="outlined" color="primary" onClick={onBack} sx={{ marginRight: 2 }}>
        Back
      </Button>
      <Button type="submit" variant="contained" color="primary" >
        Next
      </Button>

    </Box>
  );
};

export default Education;
