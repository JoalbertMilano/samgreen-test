import { ListItemAvatar, Avatar, ListItemText, Typography, ListItemButton } from "@mui/material"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"

export const ChatItem = ({ avatar = null, title, text }) => {
    const { state } = useContext(AppContext);
     
    console.log(state)
    return (
        <ListItemButton alignItems="center">
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