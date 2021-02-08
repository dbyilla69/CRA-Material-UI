import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import JokesService from '../services/JokesServices';
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const JokesList = () => {
  const classes = useStyles();
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    retrieveJoke();
  }, []);

  const retrieveJoke = () => {
    JokesService.getAll().then((res) => {
      res.data.status !== 200
        ? console.log('Please refresh screen')
        : setJokes([res.data]);
      console.log('jokes response', res.data);
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='left'>Joke</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {jokes.map((j) => {
            const { id, author, joke } = j.value;

            return (
              <TableRow key={id}>
                <TableCell component='th' scope='row'>
                  {author}
                </TableCell>
                <TableCell align='right'>{joke}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default JokesList;
