import { Box, useTheme } from '@mui/material'
import Head from 'next/head'
import { Layout } from '../src/components/Layout';
import { LoginContainer } from '../src/components/LoginContainer';

export default function Home() {
  return (
    <>
        <Head>
          <title>Login</title>
          <meta name="description" content="Login to get access" />
      </Head>
      <Layout>
        <LoginContainer />
      </Layout>
    </>

  )
}
