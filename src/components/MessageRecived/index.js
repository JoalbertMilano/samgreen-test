import { Box, Stack, Typography, Avatar, styled } from "@mui/material";

export const MessageRecived = ({ avatar, text, time }) => {
    const MessageContainer = styled(Stack)(({ theme }) => ({
        padding: "8px",
        background: theme.palette.primary.light,
        borderRadius: "12px",
    }))

    return (
        <Box>
            <Stack direction="row" alignItems="center" spacing={1} mr={12}>
                <Avatar sx={{ width: "28px", height: "28px" }}>
                    <Typography variant='caption' sx={{ color: '#252538', fontWeight: 500 }}>
                        { avatar }
                    </Typography>
                </Avatar>
                <MessageContainer direction="column">
                    <Typography variant="body1">
                        {text}
                    </Typography>
                    <Typography alignSelf="end" variant="caption" color='inherit'>
                        {time}
                    </Typography>
                </MessageContainer>    
            </Stack>
        </Box>
    )
}