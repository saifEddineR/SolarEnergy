import React, { useState, useEffect } from 'react';
import { loginUser, checkUser } from '../action/authActions';
import { useDispatch, useSelector } from 'react-redux';
// material UI ___________________________________________
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// styling ________________________________________________
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    name: '',
    password: '',
  });
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.isAuth) {
      return history.push('/control-panel');
    }
  }, [auth.isAuth]);
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(info));
  };
  const classes = useStyles();
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={login} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Username'
            name='name'
            value={info.name}
            onChange={handleChange}
            autoComplete='email'
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            value={info.password}
            onChange={handleChange}
            id='password'
            autoComplete='current-password'
          />
          <p style={{ color: '#ff4000' }}>{auth.errors ? auth.errors[0].msg : <></>}</p>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
};

export default Login;
