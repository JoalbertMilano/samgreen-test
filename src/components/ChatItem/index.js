import { ListItemAvatar, Avatar, ListItemText, Typography, ListItemButton } from "@mui/material"
import Link from "next/link"

export const ChatItem = ({ avatar = null, title, text }) => {
    return (
        <Link href="/conversation">
            <ListItemButton alignItems="flex-center">
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
        </Link>
    )
}