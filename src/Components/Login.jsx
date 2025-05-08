import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  Paper,
} from '@mui/material';

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
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Left Side Image */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: 'url"https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg"',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Right Side - Login Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Paper elevation={6} sx={{ p: 4, width: '80%', maxWidth: 400 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#6200ea' }}>
            Welcome Back!
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
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
              margin="normal"
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: '#6200ea',
                '&:hover': { backgroundColor: '#4b00b5' },
              }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
