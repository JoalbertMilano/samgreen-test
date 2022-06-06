import { Typography, Box, Stack, Toolbar, AppBar, IconButton } from '@mui/material'
import { Search, SentimentSatisfiedAlt } from '@mui/icons-material'
import { ChatInput } from '../ChatInput'
import { Nav } from '../Nav'
import { MessageRecived } from '../MessageRecived'
import { MessageSent } from '../MessageSent'

export const ChatContent = ({ title, status, avatar }) => {
    return (
        <Stack flex={1} direction="column" sx={{ height: "100%" }}>
            <Nav icon={<Search />} avatar={avatar} hideAvatar>
                <Typography variant="caption" color="inherit" component="div">
                    { title }
                </Typography>
                <Typography variant="caption" color="inherit" component="div">
                    { status }
                </Typography>
            </Nav>
            <Stack flex={1} direction="column" spacing={2} p={5} sx={{ overflowY: "auto" }}>
                <MessageRecived 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh malesuada sit."
                    time="9:48 p. m."
                    avatar={avatar}
                />
                <MessageSent 
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh malesuada sit."
                    time="9:48 p. m."
                />
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