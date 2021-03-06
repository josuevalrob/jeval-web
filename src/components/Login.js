import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './../styles/forms'
import authService from './../services/AuthServices'
import { Redirect } from 'react-router-dom'
import { withAuthConsumer } from '../contexts/AuthStore';
import CircularProgress from '@material-ui/core/CircularProgress';

// import validations from './misc/Validations'

function Signin(props) {
  const classes = useStyles();
  const [error, setError] = React.useState('')

  // const [isAuthenticated, setAuth] = React.useState(false)
  const isAuthenticated = false

  const [user, setUser] = React.useState({email: '',password: ''})
  const [isLoading, setLoader] = React.useState(false)
  const handleUser = name => event => setUser({...user, [name]: event.target.value})

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true)
    authService.authenticate(user)
      .then(
        (user) => {
          setLoader(false)
          props.onUserChange(user); //* actualizamos el context
        },
        (error) => {
          console.log(error);
          const { response:{data:message} } = error;
          setError(message.message);
          setLoader(false);
        }
      )
  }
  if (isAuthenticated) {
    return <Redirect to={'/'} />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            onChange={handleUser('email')}
            value={user.email || ''}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
            autoFocus
            type="email"
          />
          <TextField
            onChange={handleUser('password')}
            value={user.password || ''}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="off"
            type="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          { !!error && <div> {error} </div> }
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit} >
            { 
              !isLoading
              ? 'Sign In'
              : <CircularProgress className={classes.progress} color="secondary" />
            }
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              {/* <Link to="/user" component={AdapterLink}  variant="body2">
                {"Don't have an account? Sign Up"}
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withAuthConsumer(Signin)