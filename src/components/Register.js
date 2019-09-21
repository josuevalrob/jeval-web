import React from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormGroup from '@material-ui/core/FormGroup';
import useStyles from '../styles/forms'
import AdapterLink from './misc/Enlace';
import authService from '../services/AuthServices'
import { Redirect } from 'react-router-dom'
import { withAuthConsumer } from '../contexts/AuthStore';


function Signin(props) {
  const classes = useStyles();

  const [isAuthenticated, setAuth] = React.useState(false)

  const [user, setUser] = React.useState({email: '', password: '', name:'', lastName:'', rol: 'student'})

  const handleUser = name => event => setUser({...user, [name]: event.target.value})

  const handleSubmit = (event) => {
    event.preventDefault();
    authService.register(user)
      .then(
        (user) => {          
          props.onUserChange(user); //* actualizamos el context          
          setAuth(true)
        },
        (error) => {
          const { message, errors } = error; 
          console.error(message, errors)
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
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="off"
                name="name"
                onChange={handleUser('name')}
                value={user.name || ''}
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleUser('lastName')}
                value={user.lastName || ''}
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleUser('email')}
                value={user.email || ''}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="none"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleUser('password')}
                value={user.password || ''}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="password"
                type="password"
                id="password"
                autoComplete="none"
              />
            </Grid>
            <Grid item xs={12}>
             <FormGroup row>
              <RadioGroup row
                name={user.rol} 
                value={user.rol} 
                onChange={handleUser('rol')} >
                <FormControlLabel value={'teacher'} control={<Radio />} label="Teacher" />
                <FormControlLabel value={'student'}control={<Radio />} label="Student" />
              </RadioGroup>
            </FormGroup>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color={'secondary'}>
                {'Register with google'}
              </Link>
            </Grid>
            <Grid item>
              <Link to="/sign-in" component={AdapterLink}  variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default withAuthConsumer(Signin)