import { Layout } from '../../src/components/Layout'
import { Nav } from '../../src/components/Nav'
import { Typography, Box, Stack } from '@mui/material'
import { ChatBubbleOutline } from '@mui/icons-material'
import { SearchInput } from '../../src/components/SearchInput'
import { ChatsList } from '../../src/components/ChatsList'
import { WelcomeChat } from '../../src/components/WelcomeChat'
import { ChatContent } from '../../src/components/ChatContent'

export default function Chats() {
    return (
        <Layout>
            <Stack direction="row" sx={{ height: "100%"}}>
                <Box flex={2} sx={{ overflowY: "auto" }}>
                    <Box sx={{ mb: 2 }}>
                        <Nav icon={<ChatBubbleOutline />} avatar="MM" hideAvatar>
                            <Typography variant="h7" color="inherit" component="div">
                                Mis chats
                            </Typography>
                        </Nav>
                    </Box>
                    <SearchInput placeholder="Buscar o empezar nuevo chat" ariaLabel="search chat" />
                    <ChatsList />
                </Box>
                <Box flex={4} sx={{ display: {xs: "none", md: "flex"} }}>
                    {/* <WelcomeChat /> */}
                    <ChatContent title="Miracle Mango" status="últ. vez hoy a la(s) 4:22 p. m." avatar="MM" />
                </Box>
            </Stack>
        </Layout>
    )
}