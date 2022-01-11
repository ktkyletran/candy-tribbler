import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Grid, TextField, InputAdornment, Paper } from '@mui/material';
import useStyles from './styles';
import logo from '../../assets/Home-logo.png'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import businessImg from '../../assets/business.png'
import WorkIcon from '@mui/icons-material/Work';
import GroupsIcon from '@mui/icons-material/Groups';

const btnStyles = {color: '#151515', fontWeight: 'bold', fontFamily: 'Poppins', '&:hover': {backgroundColor: '#ffe900', boxShadow: '2px 2px 6px lightgray'}};
const fieldStyles = {boxShadow: '2px 3px 4px lightgray', borderRadius: '6px'};

const Home = () => {
  const styles = useStyles();

  return (
    <>
    <Grid container className={styles.section}>
      <Grid item xs={12} sm={6}>
        <Grid container sx={{padding: '10px 20px'}}>
          <Grid item sm={6}>
            <Button component={Link} to="/employers" sx={btnStyles}>Employers</Button>
          </Grid>
          <Grid item sm={6} sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button component={Link} to="/login" sx={btnStyles}>Login</Button>
            <Button component={Link} to="/signup" sx={btnStyles}>Sign Up</Button>
          </Grid>
        </Grid>

        <Grid container className={styles.innerSection}>
          <Grid item>
            <img src={logo} alt="" className={styles.logo} />
            <p className={styles.motto}>Your new journey starts here</p>
          </Grid>
          <Grid item className={styles.searchContainer}>
            <TextField InputProps={{startAdornment: (<InputAdornment position="start"><SearchIcon/></InputAdornment>)}} sx={fieldStyles} fullWidth label="Search for a career" />
            <TextField InputProps={{startAdornment: (<InputAdornment position="start"><LocationOnIcon/></InputAdornment>)}} sx={fieldStyles} label="Location" />
            <Button sx={{boxShadow: '2px 3px 4px lightgray', borderRadius: '6px', padding: '10px 30px', fontWeight: 'bold', backgroundColor: '#ffe900', color: '#151515', '&:hover': {backgroundColor: '#151515', color: 'white'}}} variant="contained" className={styles.searchBtn}>Search</Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} className={styles.img}></Grid>
    </Grid>

    <Grid container className={styles.section}>
      <Grid item xs={12} sm={6} sx={{textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
        <Grid item className={styles.textContainer}>
          <h2 className={styles.careerText}>Your new career awaits..</h2>
          <br></br>
          <p>Frustrated by other job boards posting entry level jobs that aren’t entry level?<br></br>So are we!</p>
          <br></br>
          <p>Here at NuBee, we only allow employers to post jobs that are meant for those entering a new career. Our job listings will only ask for up to 1 year of experience, but that doesn’t mean you won’t qualify with less.</p>
          <br></br>
          <p className={styles.boldText}>In just three easy steps, you'll be making your way towards a new career destined for you</p>
        </Grid>
        <Grid item sx={{display: 'flex', gap: '25px', marginTop: '50px'}}>
          <Paper className={styles.stepBox} >
            1. Register
            <HowToRegIcon className={styles.stepIcons} />
            Sign up for a FREE account
          </Paper>
          <Paper className={styles.stepBox} >
            2. Search
            <SearchIcon className={styles.stepIcons} />
            Search for a new career
          </Paper>
          <Paper className={styles.stepBox} >
            3. Apply
            <ForwardToInboxIcon className={styles.stepIcons} />
            Submit your application!
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} className={styles.img2}></Grid>
    </Grid>

    <Grid container className={[styles.section, styles.fade]}>
      <Grid item xs={12} sm={6}><img src={businessImg} alt="" className={styles.img3} /></Grid>
      <Grid item xs={12} sm={6}>
        <h2 className={styles.businessText}>Business Accounts</h2>
        <Grid item className={styles.listItem}><div className={styles.iconHolder}><SearchIcon className={styles.listIcons}/></div>Find fresh and innovative talent</Grid>
        <Grid item className={styles.listItem}><div className={styles.iconHolder}><WorkIcon className={styles.listIcons}/></div>Manage applicants, job listings, and employees in one platform</Grid>
        <Grid item className={styles.listItem}><div className={styles.iconHolder}><GroupsIcon className={styles.listIcons}/></div>Grow your business and build a team you're proud of</Grid>
      </Grid>
    </Grid>
    </>
  )
}

export default Home
