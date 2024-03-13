import { Grid, Typography, ThemeProvider, Button, Box } from '@mui/material'
import React from 'react'
import Tema from '../assets/Tema'
import kingdom from "../assets/images/kingdom.webp"
import lorien from "../assets/images/lorien.webp"
import piedras from "../assets/images/piedras.webp"
import gear from "../assets/images/geartown.webp"
import all from "../assets/images/banner.webp"
import all2 from "../assets/images/banner2.webp"
import all3 from "../assets/images/banner3.webp"
import all4 from "../assets/images/banner4.webp"



const Tournament = () => {

    const torneos = [{ name: "Kingdom Championship Series", img: kingdom, back: all2 }, { name: "Liga Fenix las Piedras", img: piedras, back: all },
    { name: "CDS Lorien TCG Club", img: lorien, back: all3 }, { name: "Liga Maldonado Geartown", img: gear, back: all4 },]


    return (
        <ThemeProvider theme={Tema}>

            <Grid container justifyContent="center" mt={4} id="#torneos">

                <Grid item xs={11} sm={10} textAlign="center" mb={1} >
                    <Typography variant='h2' fontWeight={600} color="primary">Liga de Torenos</Typography>
                </Grid>

                <Grid item xs={11} sm={10}>
                    <Typography variant="h4" color="primary"></Typography>
                </Grid>

                <Grid item xs={12} sm={10}>
                    {torneos.map((info, index) => (

                        <Box display="flex" alignItems="center" justifyContent="space-between" key={index} mt={1} sx={{ backgroundImage: `url(${info.back})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "right" }} height="20vh">

                            <Box sx={{ backdropFilter: "blur(5px)", clipPath: "polygon(0% 0, 100% 0, 70% 100%, 0% 100%)", width: "60%", height: "100%" }}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="h3" textAlign="center" textTransform="capitalize" fontWeight={600} color="primary">{info.name}</Typography>
                                </Grid>
                            </Box>
                            
                            <Grid item xs={3} sm={1} textAlign="center">
                                    <img src={info.img} style={{ border: 1, borderStyle: "hidden", borderRadius: "10%" }} width="60%" height="auto" />
                                </Grid>


                        </Box>
                    ))}

                </Grid>

            </Grid>

        </ThemeProvider>
    )
}

export default Tournament