import { Typography, Stack, Toolbar, AppBar, IconButton, Box } from '@mui/material'
import { Search, SentimentSatisfiedAlt, ArrowBack } from '@mui/icons-material'
import { ChatInput } from '../ChatInput'
import { Nav } from '../Nav'
import { MessageRecived } from '../MessageRecived'
import { MessageSent } from '../MessageSent'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export const ChatContent = ({ title, status, avatar }) => {
    const { chatStatus, setChatStatus } = useContext(AppContext)

    const handleBack = () => {
        setChatStatus(prev => ({...prev, welcome: true, currentChat: null}));
    }
    return (
        <Stack flex={1} direction="column" sx={{ height: "100%" }}>
            <Nav icon={<Search />} avatar={avatar} hideAvatar>
                <Stack direction="row" spacing={1}>
                    <IconButton sx={{ display: { md: "none" } }} color="inherit" onClick={handleBack}>
                        <ArrowBack />
                    </IconButton>
                    <Box>
                        <Typography variant="caption" color="inherit" component="div">
                            { title }
                        </Typography>
                        <Typography variant="caption" color="inherit" component="div">
                            { status }
                        </Typography>
                    </Box>
                </Stack>
            </Nav>
            <Stack flex={1} direction="column" spacing={2} p={5} sx={{ overflowY: "auto" }}>
                {
                    chatStatus?.currentChat.messages.map((item, index) => {
                        if (item.type === 0) return ( <MessageRecived key={index} text={item.content} time={item.time} avatar={avatar} /> )
                        if (item.type === 1) return ( <MessageSent key={index} text={item.content} time={item.time} /> )
                    })
                }
            </Stack>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton color='inherit'>
                        <SentimentSatisfiedAlt />
                    </IconButton>
                    <ChatInput placeholder='Escribe un mensaje aquí' />
                </Toolbar>
            </AppBar>
        </Stack>
    )
}