import { Grid, Typography, ThemeProvider } from '@mui/material'
import React from 'react'
import Tema from '../assets/Tema'
import kingdom from "../assets/images/kingdom.webp"

const Home = () => {
    return (
        <ThemeProvider theme={Tema}>
            <Grid container justifyContent="center" mt={4}>
                <Grid item xs={11} sm={10} textAlign="center" >
                    <Typography variant='h2' fontWeight={600} color="primary">Aqui podras ver actualizaciones sobre todos los torneos de Yugioh! en Uruguay.</Typography>
                </Grid>

                <Grid item xs={11} sm={10} mt={3} display="flex" justifyContent="center" alignItems="center">
                    <Grid item xs={2} sm={1}>
                        <img src={kingdom} style={{ border: 1, borderStyle: "groove", borderRadius: "10%" }} width="100%" height="auto" />
                    </Grid>
                    <Grid item xs={9} sm={6}>
                        <Typography variant="h3" textAlign="center" fontWeight={600} color="secondary" >Kingdom Championship Series</Typography>
                    </Grid>
                </Grid>

            </Grid>
        </ThemeProvider>
    )
}

export default Home