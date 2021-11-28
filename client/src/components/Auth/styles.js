import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  paper: {
    marginTop: '4rem',
    '@media (max-width:767px)': {
      margin: '2rem 0',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
  },
  avatar: {
    margin: '1rem',
    background: 'linear-gradient(-45deg, #FF5964, #033F63 90%)'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: '1.5rem',
  },
  submit: {
    margin: '1rem 0',
  },
}));