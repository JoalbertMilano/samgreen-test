import { Layout } from '../../src/components/Layout'
import { Nav } from '../../src/components/Nav'
import { Typography, Box, Stack } from '@mui/material'
import { ChatBubbleOutline } from '@mui/icons-material'
import { SearchInput } from '../../src/components/SearchInput'
import { ChatsList } from '../../src/components/ChatsList'
import { WelcomeChat } from '../../src/components/WelcomeChat'

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
                <Box flex={4} sx={{ display: {xs: "none", md: "flex"} }}>
                    <WelcomeChat />
                </Box>
            </Stack>
        </Layout>
    )
}