import "../styles/globals.css";
import Layout from "../components/Layout";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { SnackbarProvider } from "notistack";
import Slide from '@material-ui/core/Slide';

const theme = createTheme({
  palette: {
    primary: {
      main: '#231f20',
    },
    secondary: {
      main: '#d63f33',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider>
     <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </SnackbarProvider>
  );
}

export default MyApp;
