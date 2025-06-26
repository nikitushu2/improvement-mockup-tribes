import Navigation from "./Navigation";
import Landing from "./Landing";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Communities from "./Communities";

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
    </ThemeProvider>
  );
}

export default App;