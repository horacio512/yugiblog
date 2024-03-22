import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import Tema from '../assets/Tema'
import { Grid, Link, Typography } from '@mui/material'
import stores from "../info.json"

/*icons*/
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Detail = ({ storeName }) => {

    return (
        <ThemeProvider theme={Tema}>
                
            <Grid container display="flex" justifyContent="center">

                <Grid item xs={12} sm={10} mt={3}>
                    <Typography variant="h2" fontWeight={400} textAlign="center" color="primary">Organiza: {stores[storeName].store} </Typography>
                </Grid>
                <Grid item xs={12} sm={10} display="flex" justifyContent="center" alignItems="center" mt={2} >
                    <Typography variant="h4" color="primary">Redes: </Typography>
                    <Typography color="primary" display="flex">
                        <Link target="_blank" href={stores[storeName].insta} m={1} ><InstagramIcon fontSize='large' sx={{ color: "#C13584" }} /></Link>
                        <Link target="_blank" href={stores[storeName].face} m={1}><FacebookIcon fontSize='large' sx={{ color: "#4267B2" }} /></Link>
                    </Typography>
                </Grid>
            </Grid>

        </ThemeProvider >
    )
}

export default Detail