import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateKeySkills } from './../actions/actions';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';

const KeySkills = ({ onSubmit, onBack }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [keySkills, setKeySkills] = useState([{ skill: '' }]);

  const submitHandler = () => {
    dispatch(updateKeySkills(keySkills.map(item => item.skill)));
    onSubmit();
  };

  const isNextButtonVisible = keySkills.length > 0;

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(submitHandler)}
      sx={{
        maxWidth: '600px',
        padding: '16px',
        margin: 'auto',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Key Skills
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {keySkills.map((item, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <TextField
              {...register(`keySkills.${index}.skill`, { required: 'Skill is required' })}
              id={`outlined-basic-keySkills-${index}`}
              label={`Skill`}
              variant="outlined"
              margin="normal"
              value={item.skill}
              onChange={(e) => {
                const updatedSkills = [...keySkills];
                updatedSkills[index].skill = e.target.value;
                setKeySkills(updatedSkills);
              }}
              error={Boolean(errors.keySkills && errors.keySkills[index]?.skill)}
              helperText={errors.keySkills && errors.keySkills[index]?.skill ? errors.keySkills[index]?.skill.message : ''}
            />
            <IconButton
              onClick={() => {
                const updatedSkills = [...keySkills];
                updatedSkills.splice(index, 1);
                setKeySkills(updatedSkills);
              }}
              color="error"
              sx={{ marginLeft: 2 }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>

      {isNextButtonVisible && (
        <Button type="button" variant="outlined" color="primary" onClick={() => setKeySkills([...keySkills, { skill: '' }])} sx={{ marginTop: 2 }}>
          Add More
        </Button>
      )}

      <Divider sx={{ marginTop: 2, marginBottom: 2 }} />

      {isNextButtonVisible && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button type="button" variant="outlined" color="primary" onClick={onBack} sx={{ marginRight: 2, marginLeft: 'auto' }}>
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default KeySkills;
