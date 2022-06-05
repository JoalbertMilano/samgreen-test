import { Layout } from '../../src/components/Layout'
import { Nav } from '../../src/components/Nav'
import { Typography, Box, Stack, Toolbar, AppBar, IconButton } from '@mui/material'
import { ChatBubbleOutline, Search, SentimentSatisfiedAlt } from '@mui/icons-material'
import { SearchInput } from '../../src/components/SearchInput'
import { ChatsList } from '../../src/components/ChatsList'
import { WelcomeChat } from '../../src/components/WelcomeChat'
import { ChatInput } from '../../src/components/ChatInput'

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

                    <Stack flex={1} direction="column" sx={{ height: "100%" }}>
                        <Nav icon={<Search />} avatar="MM" hideAvatar>
                            <Typography variant="caption" color="inherit" component="div">
                                Miracle Mango
                            </Typography>
                            <Typography variant="caption" color="inherit" component="div">
                                últ. vez hoy a la(s) 4:22 p. m.
                            </Typography>
                        </Nav>
                        <Box flex={1}>
                            test
                        </Box>
                        <AppBar position="static">
                            <Toolbar variant="dense">
                                <IconButton color='inherit'>
                                    <SentimentSatisfiedAlt />
                                </IconButton>
                                <ChatInput placeholder='Escribe un mensaje aquí' />
                            </Toolbar>
                        </AppBar>
                    </Stack>

                </Box>
            </Stack>
        </Layout>
    )
}