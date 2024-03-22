import { Grid, Typography, ThemeProvider, Button, Box } from '@mui/material'
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

    const torneos = [{ id: "kingdom", name: "Kingdom Championship Series", info: "25 de mayo 626", back: all2, front: yugi }, { id: "laspiedras", name: "Liga Fenix las Piedras", info: "Las piedras", back: all, front: kaiba },
    { id: "lorien", name: "CDS Lorien TCG Club", info: "Colonia 2235", back: all3, front: pegasus }, { id: "geartown", name: "Liga Maldonado Geartown", info: "Gral. Leonardo Olivera 1132", back: all4, front: joey },]

    const [show, setShow] = useState("")

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
                            <Box display="flex" alignItems="center" mt={1.1} onClick={() => { show === info.id ? (setShow("")) : (setShow(info.id)) }}
                                sx={{
                                    backgroundImage: `url(${info.back})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right", cursor: "pointer", "&:hover": { sm: { transform: "scale(1.1)" } }
                                }} height="20vh">
                                <Box sx={{ backdropFilter: "blur(6px)", clipPath: "polygon(0% 0, 100% 0, 70% 100%, 0% 100%)", width: "60%", height: "100%" }}>
                                    <Grid item xs={12} sm={12} display="flex" flexDirection="column" alignItems="center">
                                        <Typography variant="h3" textAlign="center" textTransform="capitalize" fontWeight={600} color="primary">{info.name}</Typography>
                                        <Typography variant="h5" mb={4} textAlign="center" color="primary">{info.info}</Typography>
                                        <TouchAppIcon color="primary" sx={{
                                            display: { xs: "flex", md: "none", opacity: 0.7 }
                                        }} />

                                    </Grid>

                                </Box>
                                <Box alignSelf="flex-end" display="flex">
                                    <img src={info.front} height="125vh" />
                                </Box>

                            </Box>
                            {show === info.id ? (<Detail storeName={info.id} sx={{transform: "rotate(30deg)"}} />) : (<></>)}
                        </Box>

                    ))}

                </Grid>



            </Grid>

        </ThemeProvider>
    )
}

export default Tournament