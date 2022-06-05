import { Layout } from '../../src/components/Layout'
import { Nav } from '../../src/components/Nav'
import { Typography, Box, Stack } from '@mui/material'
import { ChatBubbleOutline } from '@mui/icons-material'
import { SearchInput } from '../../src/components/SearchInput'
import Image from 'next/image'
import { ChatsList } from '../../src/components/ChatsList'

export default function Chats() {
    return (
        <Layout>
            <Stack direction="row" sx={{ height: "100%"}}>
                <Box flex={2} sx={{ overflowY: "auto" }}>
                    <Nav icon={<ChatBubbleOutline />} avatar="MM" hideAvatar>
                        <Typography variant="h7" color="inherit" component="div">
                            Mis chats
                        </Typography>
                    </Nav>
                    <SearchInput placeholder="Buscar o empezar nuevo chat" ariaLabel="search chat" />
                    <ChatsList />
                </Box>
                <Stack flex={4} direction="column" alignItems="center" justifyContent="center" sx={{ display: {xs: "none", md: "flex"} }}>
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
            </Stack>
        </Layout>
    )
}