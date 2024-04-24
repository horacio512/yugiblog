import React from 'react'
import { ThemeProvider } from '@emotion/react'
import Tema from '../assets/Tema'
import { Grid, Typography } from '@mui/material'

const Footer = () => {
    return (
        <ThemeProvider theme={Tema}>
            <Grid container display="flex" justifyContent="center" sx={{ backdropFilter: "blur(10px)" }} mt={4} pb={2}>

                <Grid item xs={11} sm={10} mt={2} mb={2} textAlign="start">
                    <Typography variant="h4" color="primary">© Konami 2024</Typography>
                </Grid>

                <Grid item xs={11} sm={10} textAlign="center">
                    <Typography color="primary" variant="h6" >Esta página web fue creada con fines practicos, no pretende generar ingresos ni apropiaciones de ningun tipo.</Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Footer