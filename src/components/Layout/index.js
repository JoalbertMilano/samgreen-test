import { Box, styled, useTheme } from '@mui/material'

const ContentCenter = styled(Box)(({ theme }) => ({
    position: 'fixed',
    top: 0,
    width: "100vw",
    height: "100vh",
    [theme.breakpoints.up('md')]: {
      paddingTop: 32,
      paddingBottom: 32,
      paddingLeft: 100,
      paddingRight: 100,
    }, 
}))

export const Layout = ({ children }) => {
  const theme = useTheme();

    return (
        <Box sx={{ minHeight: '100vh', background: theme.palette.primary.light }}>
            <Box sx={{ height: '100px', background:  theme.palette.primary.dark }}/>
            <ContentCenter>
                <Box sx={{ height: "100%", background: theme.palette.secondary.main, overflowY: "auto" }}>
                    { children }
                </Box>
            </ContentCenter>
        </Box>
    )
}