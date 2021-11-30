import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, Paper, Grid, Typography, Container, Checkbox } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import InputField from '../InputField/InputField.js';
import FormControlLabel from '@mui/material/FormControlLabel';
import { GoogleLogin } from 'react-google-login';
import Icon from './Icon.js';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes.js';
import { signIn, signUp } from '../../actions/auth'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const Auth = () => {
  const styles = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [checked, setChecked] = useState(false)
  const [creator, setCreator] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signUp({...form, isCreator: creator}, history))
    } 
    else if (isSignup && form.password !== form.confirmPassword) {
      alert('Please make sure passwords match');
    } 
    else {
      dispatch(signIn(form, history))
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const switchModes = () => {
    setIsSignup((prevState) => !prevState);
    setShowPassword(false)
  };

  const googleSuccess = async (res) => {
    const userData = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { userData, token } });

      history.push('/')
    } catch (err) {
      console.log(err)
      alert('Google sign in was unsuccessful. Please try again later.')
    }
  };

  const googleFailure = (err) => {
    console.log(err)
    alert('Google sign in was unsuccessful. Please try again later.')
  };

  const handlePassword = () => setShowPassword((prevState) => !prevState);
  const handleCheckbox = (e) => {
    setChecked((prevState => !prevState));
    setCreator((prevState => !prevState));
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={6} className={styles.paper} sx={{background: 'rgba(255,255,255,0.3)', borderRadius: '6px'}}>
        <Avatar className={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <InputField name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                  <InputField name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )
            }
            <InputField name="email" label="Email Address" handleChange={handleChange} type="email" />
            <InputField name="password" label="Password" handleChange={handleChange} handlePassword={handlePassword} type={showPassword ? 'text' : 'password'} inputProps={{ minLength: 8 }} />
            { isSignup && <InputField name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" /> }
            { isSignup && (
              <Grid item>
                <FormControlLabel label={<Typography sx={{fontWeight: 'bold', color: 'white', textShadow: '1px 2px 1px #353535'}}>I'm a content creator</Typography>} control={<Checkbox sx={{'&.Mui-checked': { color: "#FFE74C" }}} />} checked={checked} onChange={handleCheckbox}/> 
              </Grid>
              )}
          </Grid>
          <Button sx={{ margin: '1rem 0', background: 'linear-gradient(45deg, #FFE74C, #FF5964)', fontWeight: 'bold', letterSpacing: '2px', transition: '0.3s', fontWeight: 'bold', '&:hover': { letterSpacing: '4px' } }} type="submit" fullWidth variant="contained" color="primary" >
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin 
            clientId={process.env.REACT_APP_GOOGLE_CLIENT}
            render={(renderProps) => (
              <Button
                sx={{background: 'linear-gradient(45deg, #FF5964,#FFE74C)', letterSpacing: '2px', transition: '0.3s', fontWeight: 'bold', '&:hover': { letterSpacing: '4px' } }}
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon/>} 
                variant="contained"
              >
                  Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchModes} sx={{marginTop: '0.5rem', color: "#353535", fontWeight: 'bold', '&:hover': { color: 'white' }}}>
                { isSignup ? 'Already have an account?' : "Don't have an account?" }
              </Button>
            </Grid> 
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
