import { useEffect } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '../src/theme'
import { AppContextProvider } from '../src/context/AppContext';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ThemeProvider>
  )
}

export default MyApp
