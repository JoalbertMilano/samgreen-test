import { List } from "@mui/material"
import { ChatItem } from "../ChatItem"
import { PeopleAltOutlined, PersonOutlineOutlined } from '@mui/icons-material';

const chats = [
    {
        title: "Miracle Mango",
        avatar: "MM", 
        text: "Lorem ipsum dolor sit amet, consectetur ..." 
    },
    {
        title: "Ashlynn Geidt",
        avatar: "AG", 
        text: "Lorem ipsum dolor sit amet 😴🧐" 
    },
    {
        title: "Haylie Bergson",
        avatar: "MG", 
        text: "Lorem ipsum dolor sit amet, consecte..." 
    },
    {
        title: "Marilyn Carder",
        avatar: "MC", 
        text: "Lorem ipsum dolor sit amet, consecte..." 
    },
    {
        title: "Grupo de Trabajo",
        avatar: <PeopleAltOutlined />, 
        text: "+52 1 222 555 5555: Lorem ipssum dolor..." 
    },
    {
        title: "Jaxson Rosser",
        avatar: "JR", 
        text: "Lorem ipsum dolor sit amet, consectetur ..." 
    },
    {
        title: "Kaiya Westervelt",
        avatar: "KW", 
        text: "Lorem ipsum dolor sit amet, consectetur ..." 
    },
    {
        title: "+52 1 222 555 5555",
        avatar: <PersonOutlineOutlined />, 
        text: "Lorem ipsum dolor sit amet 😛😴" 
    },
    {
        title: "Alfredo Septimus",
        avatar: "AS", 
        text: "Lorem ipsum dolor sit amet 😇😄😛😴🧐" 
    },
]

export const ChatsList = () => {
    return (
        <List>
            {
                chats.map(item => (
                    <ChatItem avatar={item.avatar} title={item.title} text={item.text} />
                ))
            }
        </List>
    )
}