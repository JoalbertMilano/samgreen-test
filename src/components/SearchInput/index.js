import { Box, InputBase, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

export const SearchInput = ({ placeholder, ariaLabel }) => {
    return (
        <Box sx={{ display: {xs: "none", md: "flex"} }}>
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <Search />
            </IconButton>
            <InputBase placeholder={placeholder} inputProps={{ 'aria-label': ariaLabel }} sx={{ ml: 1, mr: 1, flex: 1 }} />
        </Box>
    )
}