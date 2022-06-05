import { Box, useTheme } from '@mui/material'
import Head from 'next/head'
import { LoginContainer } from '../src/components/LoginContainer';


export default function Home() {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh', background: theme.palette.primary.light }}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to get access" />
      </Head>
      <Box sx={{ height: '100px', background:  theme.palette.primary.dark }}/>
      <LoginContainer />
    </Box>
  )
}
