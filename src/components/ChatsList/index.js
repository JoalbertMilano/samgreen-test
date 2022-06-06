import { List } from "@mui/material"
import { ChatItem } from "../ChatItem"
import { PeopleAltOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

export const ChatsList = ({ data }) => {
    const { setChatStatus } = useContext(AppContext);

    const handleClick = (item) => {
        setChatStatus(prev => ({...prev, welcome: false, currentChat: item}));
    }
    
    return (
        <List>
            {
                data.map(item => (
                    <ChatItem key={item.title} avatar={item.avatar} title={item.title} text={item.text} onClick={() => handleClick(item)} />
                ))
            }
        </List>
    )
}