import { makeStyles } from '@mui/styles';
import homeImage from '../../assets/office-worker.png'
import steps from '../../assets/steps.png'


export default makeStyles(() => ({
  img: {
    background: `linear-gradient(rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%), url(${homeImage})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  img2: {
    background: `url(${steps})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  section: {
    height: '100vh',
  },
  innerSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '125px',
    flexDirection: 'row',
  },
  searchContainer: {
    display: 'flex',
    gap: '10px',
  },
  motto: {
    textAlign: 'center',
    margin: '-40px auto 20px auto',
    fontWeight: 500
  },
  textContainer: {
    width: '80%',
    color: '#151515',
    textAlign: 'left'
  },
  careerText: {
    fontSize: '60px'
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: '24px',
    marginTop: 40
  },
  stepBox: {
    width: '250px',
    height: '250px',
    background: '#ffe900 !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    padding: 20,
    transition: '0.3s ease-in-out !important',
    boxShadow: '6px 6px 0 black !important',
    '&:hover': {
      transform: 'scale(105%)'
    }
  },
  stepIcons: {
    fontSize: '80px !important',
    margin: '10px 0'
  },
  fade: {
    background: 'linear-gradient(#fff,#BCD5F4,#BCD5F4,#fff)',
    marginTop: 100
  },
  img3: {
    width: '90%'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '50px !important',
    fontSize: 20,
    transition: '0.3s ease !important',
    "&:hover": {
      transform: 'translateY(-5px)'
    }
  },
  iconHolder: {
    width: '75px',
    height: '75px',
    borderRadius: '75px',
    backgroundColor: '#ffe900',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
    boxShadow: '0px 3px 6px rgba(0,0,0,0.3)'
  },
  businessText: {
    marginBottom: '40px',
    fontSize: 60
  },
  listIcons: {
    fontSize: '40px !important'
  }
}));