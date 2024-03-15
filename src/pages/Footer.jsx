import React from 'react'
import { ThemeProvider } from '@emotion/react'
import Tema from '../assets/Tema'
import { Grid, Typography } from '@mui/material'

const Footer = () => {
    return (
        <ThemeProvider theme={Tema}>
            <Grid container display="flex" sx={{ backdropFilter: "blur(10px)" }} mt={4} pb={2}>
                <Grid item xs={11} sm={10} mt={2} mb={2} textAlign="end">
                    <Typography variant="h4" color="primary">© Yugioh Uruguay 2024</Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Footer