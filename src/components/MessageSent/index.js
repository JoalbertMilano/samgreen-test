import { Stack, Typography, Box, styled } from "@mui/material";

export const MessageSent = ({ text, time }) => {
    const MessageContainer = styled(Stack)(({ theme }) => ({
        padding: "8px",
        background: theme.palette.primary.main,
        borderRadius: "12px",
        color: "white"
    }))

    return (
        <Box>
            <Stack direction="row" ml={12}>
                <MessageContainer direction="column" flex={1}>
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