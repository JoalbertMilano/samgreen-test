import { AppBar, Toolbar, Box, IconButton, Avatar, Typography } from '@mui/material'
import { MoreVert } from '@mui/icons-material'

export const Nav = ({ children, icon, avatar, hideAvatar = false }) => {
    return (
        <AppBar position="sticky">
            <Toolbar variant="dense">
                <Avatar sx={{ display: { xs: hideAvatar ? 'none' : 'flex', md: "flex"} }}>
                    <Typography variant='body1' sx={{ color: '#252538', fontWeight: 500 }}>
                        { avatar }
                    </Typography>
                </Avatar>
                <Box flex={1} sx={{ ml: { xs: hideAvatar ? 0 : 2, md: 2} }}>
                    { children }
                </Box>
                <IconButton edge="start" color="inherit" aria-label="chat" sx={{ mr: 2 }}>
                    { icon }
                </IconButton>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MoreVert />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}