import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <Box>
         <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                Pokedex App
                </Typography>
            </Toolbar>
         </AppBar>
        </Box>
    )
}

export default Navbar