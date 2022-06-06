import { Layout } from '../../src/components/Layout'
import { Nav } from '../../src/components/Nav'
import { Typography, Box, Stack } from '@mui/material'
import { ChatBubbleOutline } from '@mui/icons-material'
import { SearchInput } from '../../src/components/SearchInput'
import { ChatsList } from '../../src/components/ChatsList'
import { WelcomeChat } from '../../src/components/WelcomeChat'
import { ChatContent } from '../../src/components/ChatContent'
import { useContext } from 'react'
import { AppContext } from '../../src/context/AppContext'

export default function Chats({ data }) {
    const { chatStatus } = useContext(AppContext);
    
    return (
        <Layout>
            <Stack direction="row" sx={{ height: "100%"}}>
                <Box flex={2} sx={{ display: {xs: chatStatus.welcome || "none", md: "block"}, overflowY: "auto" }}>
                    <Box sx={{ mb: 2 }}>
                        <Nav icon={<ChatBubbleOutline />} avatar="MM" hideAvatar>
                            <Typography variant="h7" color="inherit" component="div">
                                Mis chats
                            </Typography>
                        </Nav>
                    </Box>
                    <SearchInput placeholder="Buscar o empezar nuevo chat" ariaLabel="search chat" />
                    <ChatsList data={data} />
                </Box>
                <Box flex={4} sx={{ display: {xs: chatStatus.welcome && "none", md: "flex"} }}>
                    {
                        chatStatus.welcome ? (
                            <WelcomeChat />
                        )
                        : (
                            <ChatContent title={chatStatus.currentChat.title} status={chatStatus.currentChat.status} avatar={chatStatus.currentChat.avatar} />
                        )
                    }
                </Box>
            </Stack>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/hello')
    const data = await res.json()

    return {
      props: {
        data,
      },
    }
}