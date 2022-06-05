import { TextField, styled } from "@mui/material"

const InputLogin = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.light,
      },
    }
}))

export const InputPrimary = ({ label, placeholder, type }) => {
    return (
        <InputLogin fullWidth label={label} placeholder={placeholder} type={type} focused />
    )
}