import React from 'react'
import { Grid, Typography, ThemeProvider} from '@mui/material'
import Tema from '../assets/Tema'
import regio from "../assets/images/regional.webp"


const Home = () => {
    return (
        <ThemeProvider theme={Tema}>
            <Grid container display="flex" justifyContent="center" alignItems="space-between" mt={4} mb={15}>

                <Grid item xs={12} textAlign="center">
                    <Typography variant="h1" fontWeight={600} color="primary">Top 8 Players del</Typography>
                </Grid>

                <Grid item xs={11} sm={5} textAlign="center">
                    <img src={regio} width="100%" height="auto" />
                </Grid>

                <Grid item xs={11} sm={10}>

                </Grid>

            </Grid>
        </ThemeProvider>
    )
}

export default Home
