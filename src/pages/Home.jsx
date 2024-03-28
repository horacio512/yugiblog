import React from 'react'
import { Grid, Typography, ThemeProvider, Button, Box } from '@mui/material'
import Tema from '../assets/Tema'
import regional from "../assets/images/regional.webp"

const Home = () => {
    return (
        <ThemeProvider theme={Tema}>
            <Grid container display="flex" justifyContent="center" alignItems="space-between" mt={4} mb={15}>

                <Grid item xs={11} sm={10} mb={3}>
                    <Typography variant="h1" fontWeight={600} textAlign="center" color="primary">Bienvenido Duelista!</Typography>
                </Grid>

                <Grid item xs={11} sm={5}>
                    <img src={regional} width="100%" height="auto" />
                </Grid>

                <Grid item xs={11} sm={10}>

                </Grid>

            </Grid>
        </ThemeProvider>
    )
}

export default Home
