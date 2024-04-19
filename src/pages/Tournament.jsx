import { Grid, Typography, ThemeProvider, Box } from '@mui/material'
import React, { useState } from 'react'
import Tema from '../assets/Tema'
import TouchAppIcon from '@mui/icons-material/TouchApp';
import all from "../assets/images/torneo/banner.webp"
import all2 from "../assets/images/torneo/banner2.webp"
import all3 from "../assets/images/torneo/banner3.webp"
import all4 from "../assets/images/torneo/banner4.webp"
import yugi from "../assets/images/torneo/yugi.webp"
import kaiba from "../assets/images/torneo/kaiba.webp"
import pegasus from "../assets/images/torneo/pegasus.webp"
import joey from "../assets/images/torneo/joey.webp"
import Detail from '../components/Detail';

const Tournament = () => {

    const torneos = [{ id: "kingdom", name: "Kingdom Championship Series", back: all2, front: yugi }, { id: "laspiedras", name: "Liga Fenix las Piedras", back: all, front: kaiba },
    { id: "lorien", name: "CDS Lorien TCG Club", back: all3, front: pegasus }, { id: "geartown", name: "Liga Maldonado Geartown", back: all4, front: joey },]

    const [show, setShow] = useState("")

    const changeState = (info) => {
        setShow(info)
    }

    return (
        <ThemeProvider theme={Tema}>

            <Grid container justifyContent="center" mt={4} id="#torneos">

                <Grid item xs={11} sm={10} textAlign="center" mb={3} >
                    <Typography variant='h1' fontWeight={600} color="primary">Liga de Torenos</Typography>
                </Grid>

                <Grid item xs={11} sm={10}>
                    <Typography variant="h4" color="primary"></Typography>
                </Grid>

                <Grid item xs={12} sm={10}>
                    {torneos.map((info, index) => (

                        <Box key={index}>
                            <Box display="flex" alignItems="center" mt={1.1} onClick={() => { changeState(info.id) }}
                                sx={{
                                    backgroundImage: `url(${info.back})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right", cursor: "pointer", "&:hover": { sm: { transform: "scale(1.1)" } }
                                }} height="20vh">
                                <Box sx={{ backdropFilter: "blur(6px)", clipPath: "polygon(0% 0, 100% 0, 80% 100%, 0% 100%)", width: "70%", height: "100%" }}>
                                    <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">

                                        <Grid item xs={6}>
                                            <Typography variant="h3" textAlign="center" textTransform="capitalize"
                                                fontWeight={600} color="primary">{info.name}</Typography>
                                        </Grid>
                                        <TouchAppIcon color="primary" sx={{
                                            display: { xs: "flex", md: "none", opacity: 0.7 }
                                        }} />

                                    </Grid>

                                </Box>
                                <Box alignSelf="flex-end" display="flex">
                                    <img src={info.front} loading="lazy" alt="yugioh character" title={info.name} height="125vh" width="auto" />
                                </Box>

                            </Box>
                            {show === info.id ? (<Detail storeName={show} changeState={changeState} />) : (<></ >)}
                        </Box>

                    ))}

                </Grid>



            </Grid>

        </ThemeProvider>
    )
}

export default Tournament