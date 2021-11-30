import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import useStyles from './styles'

const Navbar = () => {
  const styles = useStyles();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')))

  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push('/'); 
    setUser(null);
  }

  return (
    <AppBar position="static" sx={{ background: 'white' }}>
      <Toolbar>
        {/* <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={styles.menuButton}
        >
          <img src={Logo} alt="Creative Crowd" style={{width: '80px'}} />
        </IconButton> */}
        <Typography variant="h6" className={styles.title} component={Link} to="/" >
          Creative Crowd
        </Typography>
        { user ? (
          <div className={styles.profile}>
            <Avatar className={styles.avatar} alt={user.userData.name} src={user.userData.imageUrl}>
              {user.userData.name.charAt(0)}
            </Avatar>
            <Button sx={{ fontWeight: 700, color: 'white', background: 'linear-gradient(45deg, #FF5964, #FFE74C)', transition: '0.3s', '&:hover': { transform: 'translateY(-3px)' }, marginRight: '1rem' }} onClick={logout} >
              Logout
            </Button>
          </div>
        ) : (
          <>
          <Button sx={{ fontWeight: 700, color: '#FF5964', border: 'solid 2px #FF5964', transition: '0.3s', '&:hover': { transform: 'translateY(-3px)', backgroundColor: '#FF5964', color: 'white' }, marginRight: '1rem' }} component={Link} to="/auth" >
            Login
          </Button>
          <Button sx={{ color: 'white', backgroundColor: '#FF5964', transition: '0.3s', '&:hover': { transform: 'translateY(-3px)', backgroundColor: '#FF5964' } }} component={Link} to="/auth" >
            Signup
          </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
