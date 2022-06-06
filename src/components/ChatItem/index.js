import { ListItemAvatar, Avatar, ListItemText, Typography, ListItemButton } from "@mui/material"

export const ChatItem = ({ avatar = null, title, text, onClick }) => {
    return (
        <ListItemButton alignItems="center" onClick={onClick}>
            <ListItemAvatar>
                <Avatar>
                    <Typography variant='body1' sx={{ color: '#252538', fontWeight: 500 }}>
                        { avatar }
                    </Typography>
                </Avatar>
            </ListItemAvatar>
            <ListItemText 
                primary={title}
                secondary={text}
            />
        </ListItemButton>
    )
}