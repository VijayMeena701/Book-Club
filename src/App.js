import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import './App.css';
import Home from './pages/Home';
import About from './pages/About'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e5e5e5',
      main: '#ffffff',
      dark: '#e5e5e5',
      contrastText: '#fff',
    },
    secondary: {
      light: '#484848',
      main: '#212121',
      dark: '#000000',
      contrastText: '#fff',
    },
  },typography: {
    useNextVariants: true
  }
});

function App() {
  return (
      <MuiThemeProvider theme={theme}>
          <Router>
            <Navbar/>
              <div className="container">
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about' component={About}/>
                </Switch>
              </div>
              <Footer/>
          </Router>
      </MuiThemeProvider>
  );
}

export default App;
