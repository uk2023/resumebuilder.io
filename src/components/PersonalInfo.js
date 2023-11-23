import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updatePersonalInfo, updateProfilePhoto } from './../actions/actions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Avtar1 from './../assets/avtar.png';

const PersonalInfo = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const [tempImageUrl, setTempImageUrl] = useState(null);

  const submitHandler = (data) => {
    dispatch(updatePersonalInfo(data));
    onSubmit();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTempImageUrl(imageUrl);
      dispatch(updateProfilePhoto(imageUrl)); // Dispatch action to update profile photo in Redux state
      setValue('photo', file);
    }
  };
  
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '-25px', flexDirection: 'column' }}>
      <Box sx={{ textAlign: 'left', marginRight: '20px' }}>
        <Avatar sx={{ width: 170, height: 170, marginBottom: 0, marginLeft: '-5px' }} alt="Profile Avatar" src={tempImageUrl || Avtar1} />
        <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="imageInput" />
        <label htmlFor="imageInput">
          <Button size="small" variant="text" color="primary" component="span">
            Change Profile Photo
          </Button>
        </label>
      </Box>

      <Box
        component="form"
        sx={{
          maxWidth: '500px',
          padding: '15px',
        }}
        onSubmit={handleSubmit(submitHandler)}
      >
        <TextField
          {...register('name', { required: 'Name is required' })}
          id="outlined-basic-name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          error={Boolean(errors.name)}
          helperText={errors.name ? errors.name.message : ''}
        />
        {/* Other form fields */}
        <TextField
          type="file"
          {...register('photo')}
          style={{ display: 'none' }}
        />
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <TextField
            {...register('email', { required: 'Email is required' })}
            id="outlined-basic-email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            error={Boolean(errors.email)}
            helperText={errors.email ? errors.email.message : ''}
          />
          <TextField
            {...register('phone', { required: 'Phone is required' })}
            id="outlined-basic-phone"
            label="Phone"
            variant="outlined"
            fullWidth
            margin="normal"
            error={Boolean(errors.phone)}
            helperText={errors.phone ? errors.phone.message : ''}
          />
        </Box>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <TextField
            {...register('city')}
            id="outlined-basic-city"
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            {...register('state')}
            id="outlined-basic-state"
            label="State"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Box>
        <TextField
          {...register('objective')}
          id="outlined-multiline-objective"
          label="Objective"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        
        <Divider sx={{ margin: 1 }} />
        <Link to="/templates" style={{ textDecoration: 'none' }}>
          <Button type="button" variant="outlined" sx={{ marginTop: 3, marginRight: 2 }}>
            Back
          </Button>
      </Link>
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 3 }}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
