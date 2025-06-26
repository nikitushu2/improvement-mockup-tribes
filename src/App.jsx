import Navigation from "./Navigation";
import Landing from "./Landing";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Communities from "./Communities";
import Marketplaces from "./Marketplaces";
import HowItWorks from "./HowItWorks";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e556b'
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <Landing />
      <Communities />
      <Marketplaces />
      <HowItWorks />
    </ThemeProvider>
  );
}

export default App;