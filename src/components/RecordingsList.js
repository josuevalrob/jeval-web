import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/stepForm'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import recordingService from '../services/recordingServices'
import AdapterLink from './misc/Enlace'
import SearchBar from './misc/SearchBar'
import {upperFirst} from 'lodash'
import GoBack from './misc/GoBack'
import Link from '@material-ui/core/Link'
import LinearProgress from '@material-ui/core/LinearProgress';
import Delete from '@material-ui/icons/DeleteOutline';
import ConfirmDialog from './misc/Dialog'

// import queryString from 'query-string';
import {GoToCreate} from './recordings/Checkout'
// import {desc, stableSort, getSroting} from '../utils/handlingData'

export default function RecordingList() {
  const classes = useStyles();
  // const querySearch = queryString.parse(this.props.location.search)

  const [data, setData] = React.useState([])
  const [isLoading, setLoader] = React.useState(false)
  const [message, setMessage] = React.useState('This action can not be undone.')
  const fetchData = async () => {
    const response = await recordingService.getData();
    setData(response)
  }

  const [alert, setAlert] = React.useState(false)

  const DeleteRow = async (id) => {
    setLoader(true)
    recordingService.destroy(id).then(()=>{
      fetchData()
      setLoader(false)
      setAlert(false)
    },
    (error)=>{
      setLoader(false)
      setMessage('Ups, we have an error trying to delete the file. Contact with the admin')
      console.log(error)
    })
  }

  React.useEffect(()=>{fetchData()}, [])
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          {'Recordings'}
        </Typography>
        <SearchBar />
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">student&nbsp;A</TableCell>
              <TableCell align="right">student&nbsp;B</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { ! data.length
              ? <TableRow >
                  <TableCell colSpan={5}>
                    <LinearProgress />
                  </TableCell>
                </TableRow>
              : data.map((row, index) => (
                  <TableRow key={index}>
                    {row.error 
                    ? <TableCell scope="row" component={'th'} colSpan={5}>{row.error}</TableCell>
                    : <>
                        <TableCell scope="row" component={'th'}>
                          <Link color="inherit" component={AdapterLink} to={`/record/${row.id}/checkout`}>
                            {upperFirst(row.name)}
                          </Link>
                        </TableCell>
                        <TableCell align="right">{row.studentA}</TableCell>
                        <TableCell align="right">{row.studentB}</TableCell>
                        {!!row.date && <TableCell align="right">{row.date.split("T")[0]}</TableCell>}
                        <TableCell align="right">
                          <Delete onClick={()=>setAlert(row.id)}  />
                        </TableCell>
                      </>
                    }
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </Paper>
      <GoToCreate/>
      <GoBack />
      </main>
      <ConfirmDialog 
        open={alert} 
        handleClose={()=>setAlert(false)}
        handleOk={DeleteRow} 
        title={'Are you sure?'}
        message={isLoading
          ? <LinearProgress />
          : message
        }/>
    </React.Fragment>

  );
}