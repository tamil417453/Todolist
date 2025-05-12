import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import {
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
    <Grid
      container
      sx={{
        width: '100dvw',
        minHeight: '100vh',
        backgroundImage: 'url(/122.jpeg)', // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >      

   
      <Paper elevation={6} sx={{ p: 4, width: '100%', maxWidth: 400, bgcolor: 'rgba(255,255,255,0.9)' ,
         display:'flex',
         flexDirection:'column',
         justifyContent: 'center',
         alignItems: 'center',
      }}>
       
       <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, color: '#6200ea' }}>
    Welcome Back!
  </Typography>
      

        <form sx={{color: 'hsla(0, 0.00%, 100.00%, 0.90)' }} onSubmit={formik.handleSubmit}>
          <TextField sx={{color:'white'}}
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
  );
};

export default Login;
