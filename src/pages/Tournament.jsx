import { Grid, Typography, ThemeProvider, Button, Box } from '@mui/material'
import React from 'react'
import TouchAppIcon from '@mui/icons-material/TouchApp';
import Tema from '../assets/Tema'
import kingdom from "../assets/images/kingdom.webp"
import lorien from "../assets/images/lorien.webp"
import piedras from "../assets/images/piedras.webp"
import gear from "../assets/images/geartown.webp"

const Tournament = () => {

    const torneos = [{ name: "Kingdom Championship Series", img: kingdom }, { name: "Liga Fenix las Piedras", img: piedras },
    { name: "CDS Lorien TCG Club", img: lorien }, { name: "Liga Maldonado Geartown", img: gear },]


    return (
        <ThemeProvider theme={Tema}>

            <Grid container justifyContent="center" mt={4} id="#torneos">

                <Grid item xs={11} sm={10} textAlign="center" mb={1} >
                    <Typography variant='h2' fontWeight={600} color="primary">Liga de Torenos</Typography>
                </Grid>

                <Grid item xs={11} sm={10}>
                    <Typography variant="h4" color="primary"></Typography>
                </Grid>

                <Grid item xs={11} sm={7}>
                    {torneos.map((info, index) => (

                        <Box mt={1} sx={{ backgroundColor: "#272525" }}>
                            <Button key={index} color="secondary" >
                                <Grid item xs={2} sm={1}>
                                    <img src={info.img} style={{ border: 1, borderStyle: "groove", borderRadius: "10%" }} width="80%" height="auto" />
                                </Grid>
                                <Grid item xs={12} sm={10} >
                                    <Typography variant="h3" textAlign="center" textTransform="capitalize" fontWeight={600} color="primary">{info.name}</Typography>
                                </Grid>
                                <TouchAppIcon color="secondary" />

                            </Button>
                        </Box>
                    ))}

                </Grid>

            </Grid>

        </ThemeProvider>
    )
}

export default Tournament