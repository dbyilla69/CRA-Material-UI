import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import { Switch, Route } from 'react-router-dom';
//     <Switch>
//       <Route exact path={'/'} component={comp} />
//       <Route exact path={'/add'} component={comp} />
//     </Switch>;
const App = () => (
  <Container maxWidth='sm'>
    <Box my={4}>
      <Typography variant='h4' component='h1' gutterBottom>
        Create React App With Material-UI
      </Typography>
    </Box>
  </Container>
);

export default App;
