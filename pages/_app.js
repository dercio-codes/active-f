import "../styles/globals.css";
import Layout from "../components/Layout";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

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
    <>
     <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
