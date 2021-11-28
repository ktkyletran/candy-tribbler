import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import Logo from '../../assets/Cs@2x.png'
import useStyles from './styles'

const Navbar = () => {
  const styles = useStyles();

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
        <Typography variant="h6" className={styles.title} >
          Creative Crowd
        </Typography>
        <Button sx={{ fontWeight: 700, color: 'black', border: 'solid 2px #FF5964', transition: '0.3s', '&:hover': { transform: 'translateY(-3px)', backgroundColor: '#FF5964', color: 'white' }, marginRight: '1rem' }}>
          Login
        </Button>
        <Button sx={{ color: 'white', backgroundColor: '#FF5964', transition: '0.3s', '&:hover': { transform: 'translateY(-3px)', backgroundColor: '#FF5964' } }}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
