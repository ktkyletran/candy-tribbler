import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  appBar: {
    background: 'rgba(255,255,255)',
  },
  title: {
    flexGrow: 1,
    color: 'black',
    letterSpacing: '2px !important',
    textDecoration: 'none'
  },
  profile: {
    display: 'flex',
    flexDirection: 'row'
  },
  avatar: {
    marginRight: '10px'
  }
}));