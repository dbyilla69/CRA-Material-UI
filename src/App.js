import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import JokesList from './components/JokesList';

const App = () => (
  <Box my={4}>
    <Typography variant='h4' component='h1' gutterBottom>
      Create React App With Material-UI
    </Typography>
    <JokesList />
  </Box>
);

export default App;
