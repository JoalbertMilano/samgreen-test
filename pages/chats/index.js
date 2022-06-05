import { Layout } from '../../src/components/Layout'
import { Nav } from '../../src/components/Nav'
import { Typography } from '@mui/material'
import { ChatBubbleOutline } from '@mui/icons-material'

export default function Chats() {
    return (
        <Layout>
            <Nav icon={<ChatBubbleOutline />} avatar="MM" hideAvatar>
                <Typography variant="h6" color="inherit" component="div">
                    Mis chats
                </Typography>
            </Nav>
        </Layout>
    )
}