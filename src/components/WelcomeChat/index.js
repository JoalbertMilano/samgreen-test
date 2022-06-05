import { Typography, Box, Stack } from '@mui/material'
import Image from 'next/image'

export const WelcomeChat = () => {
    return (
        <Stack flex={1} direction="column" alignItems="center" justifyContent="center" sx={{ height: "100%" }}>
            <Box sx={{ width: "fit-content"}}>
                <Image src='/NoMessages.svg' width={160} height={160} />
            </Box>
            <Typography mt={3} variant='h4' sx={{ fontWeight: 500 }} align='center'>
                Bienvenidos al chat
            </Typography>
            <Typography mt={2} variant='caption' paragraph align='center' sx={{ width: "75%" }}>
                Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte. Lorem ipsum dolor sit amet, consecte.
            </Typography>
        </Stack>
    )
}