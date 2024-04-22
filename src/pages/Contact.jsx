import React from 'react'
import { ThemeProvider } from '@emotion/react'
import Tema from '../assets/Tema'
import { Grid, Typography } from '@mui/material'

const Contact = () => {
    return (
        <ThemeProvider theme={Tema}>
            <Grid container justifyContent="center" mt={3}>
                <Typography variant="h1" fontWeight={60000
                } color="primary">Contacto</Typography>

                <Grid item xs={10}>

                </Grid>
            </Grid>

        </ThemeProvider>
    )
}

export default Contact