import { InputBase, styled } from '@mui/material'


export const ChatInput = ({ placeholder }) => {
    const CustomInput = styled(InputBase)(({ theme }) => ({
        width: "100%",
        paddingLeft: "16px",
        paddingRight: "16px",
        background: theme.palette.secondary.main,
        borderRadius: "15px"
    }))

    return (
        <CustomInput placeholder={placeholder} />
    )
}