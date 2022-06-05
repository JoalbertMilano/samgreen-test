import { AppBar, Toolbar, Box, IconButton, Avatar, Typography, useTheme } from '@mui/material'
import { MoreVert } from '@mui/icons-material'

export const Nav = ({ children, icon, avatar, hideAvatar = false }) => {
    const theme = useTheme();

    return (
        <AppBar position="static" sx={{ mb: 2 }}>
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