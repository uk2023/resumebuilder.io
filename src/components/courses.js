import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { updateCourses } from './../actions/actions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Courses = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [numRows, setNumRows] = useState(1);

  const submitHandler = (data) => {
    // Dispatch the action to update the Redux state
    dispatch(updateCourses(data));
    // Proceed to the next step or perform any other actions
    onSubmit();
  };

  const addCourseRow = () => {
    setNumRows(numRows + 1);
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
        Courses & Certificates
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />

      {/* Form Fields */}
      {[...Array(numRows)].map((_, rowIndex) => (
        <Box key={rowIndex} sx={{ marginBottom: rowIndex < numRows - 1 ? 2 : 0 }}>
          <TextField
            {...register(`courses[${rowIndex}].title`, { required: 'Course Title is required' })}
            id={`outlined-basic-title-${rowIndex}`}
            label={`Course Title`}
            variant="outlined"
            margin="normal"
            error={Boolean(errors.courses && errors.courses[rowIndex]?.title)}
            helperText={errors.courses && errors.courses[rowIndex]?.title ? errors.courses[rowIndex]?.title.message : ''}
          />
          <TextField
            {...register(`courses[${rowIndex}].startDate`, { required: 'Start Date is required' })}
            id={`outlined-basic-startDate-${rowIndex}`}
            label={`Start Date `}
            margin="normal"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            error={Boolean(errors.courses && errors.courses[rowIndex]?.startDate)}
            helperText={errors.courses && errors.courses[rowIndex]?.startDate ? errors.courses[rowIndex]?.startDate.message : ''}
          />
          <TextField
            {...register(`courses[${rowIndex}].endDate`, { required: 'End Date is required' })}
            id={`outlined-basic-endDate-${rowIndex}`}
            label={`End Date `}
            type="date"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            error={Boolean(errors.courses && errors.courses[rowIndex]?.endDate)}
            helperText={errors.courses && errors.courses[rowIndex]?.endDate ? errors.courses[rowIndex]?.endDate.message : ''}
          />
          {/* Add Course Button */}
          <Divider sx={{ margin: 1 }} />
        </Box>
      ))}

<div>
        <Button variant="text" sx={{ marginRight: 2, marginTop: 2 }} onClick={addCourseRow}>
          Add Course
        </Button>
      </div>
      <div>
        <Button type="button" variant="outlined" sx={{ margin: 1, marginTop: 1 }} onClick={goBack}>
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Next
        </Button>
      </div>
    </Box>
  );
};

export default Courses;
