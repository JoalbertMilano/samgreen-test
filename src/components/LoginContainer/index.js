import { Box, Button, Divider, Stack, styled, Typography, Link, useTheme } from '@mui/material'
import Image from 'next/image'
import NextLink from 'next/link';
import { InputPrimary } from '../InputPrimary';

const Modal = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    width: "100vw",
    height: "100vh",
    [theme.breakpoints.up('md')]: {
      paddingTop: 32,
      paddingBottom: 32,
      paddingLeft: 100,
      paddingRight: 100,
    }, 
}))

export const LoginContainer = () => {
  const theme = useTheme();
  
    return (
        <Modal>
            <Stack direction="column" spacing={2} sx={{ flexDirection: { md: "row" }, gap: { md: 8 }, alignItems: { xs: "start", md: "center" }, padding: { xs: 2, md: 4 } , background: theme.palette.secondary.main, height: "100%" }}>
            <Box mt={4} sx={{ order: { md: 2 }, flex: { md: 1 } }}>
                <Box sx={{ width: "fit-content", margin: "auto" }}>
                <Image src='/NoMessages.svg' width={160} height={160} />
                </Box>
                <Typography mt={3} variant='h4' sx={{ display: { xs: "none", md: "block" }, fontWeight: 500 }} align='center'>
                Bienvenidos al chat
                </Typography>
                <Typography mt={2} variant='caption' paragraph align='center' sx={{ display: { xs: "none", md: "block" } }}>
                Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte.
                </Typography>
            </Box>
            <Box flex={1} sx={{ width: "100%", background: { md: "white" }, padding: { md: "24px 32px" } }}>
                <Stack direction="column" spacing={3}>
                <Typography variant='h4' sx={{ fontWeight: 500 }} gutterBottom>
                    Bienvenido
                </Typography>
                <InputPrimary label="Usuario" placeholder="Usuario" type="text" />
                <InputPrimary label="Contraseña" placeholder="*****************" type="password" />
                <NextLink href="/chats">
                    <Button variant='contained' fullWidth sx={{ background: theme.palette.primary.dark}}>Iniciar Seccion</Button>
                </NextLink>
                <Divider flexItem />
                <Stack direction='row' justifyContent='space-between' sx={{ width: '100%' }}>
                    <NextLink href='/signup'><Link variant="caption" color="primary">No tengo una cuenta</Link></NextLink>
                    <NextLink href='/signup'><Link variant="caption" color="primary">Recuperar contraseña</Link></NextLink>
                </Stack>
                </Stack>
            </Box>
            </Stack>
        </Modal>
    )
}