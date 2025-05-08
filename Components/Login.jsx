import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';

const Login = () => {
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
    }),
    onSubmit: (values) => {
      console.log('Login values:', values);

      navigate('/dashboard'); 
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        maxWidth: 400,
        margin: 'auto',
        mt: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <Button color="primary" variant="contained" type="submit">
        Login
      </Button>
    </Box>
  );
};

export default Login;
