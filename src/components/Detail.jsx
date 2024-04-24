import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import Tema from '../assets/Tema'
import { Button, Drawer, Grid, Link, Typography } from '@mui/material'
import stores from "../info.json"

/*icons*/
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Detail = ({ storeName, changeState }) => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(true)
    }, [])

    const onClose = () => {
        changeState("")
        setOpen(false)
    }

    return (
        <ThemeProvider theme={Tema}>


            <Drawer PaperProps={{ sx: { height: '100vh', top: "11%", right: "0%", width: "100%", backgroundColor: "#272525" } }}
                anchor="right"
                open={open}
                onClose={() => { onClose() }}
            >

                <Grid container display="flex" justifyContent="center">

                    <Grid item xs={11} sm={10} mt={3}>
                        <Typography variant="h1" fontWeight={600} color="secondary">{stores[storeName].store} </Typography>
                    </Grid>
                    
                    <Grid item xs={11} sm={10} mt={2}>
                        <Typography variant="h2" color="primary" >Último ganador de la Liga</Typography>
                    </Grid>

                    <Grid item xs={10} sm={6} mt={2} textAlign="center">
                        <Button href={stores[storeName].maps} target="_blank">
                            <img src={stores[storeName].ubi} width="100%" height="auto" loading="lazy" />
                        </Button>
                        <Typography variant='h4' mt={1} fontWeight={300} textAlign="center" color="primary">{stores[storeName].dir}</Typography>
                    </Grid>

                    <Grid item xs={12} sm={10} display="flex" justifyContent="center" alignItems="center" mt={2} >
                        <Typography variant="h4" color="primary">Redes: </Typography>
                        <Typography color="primary" display="flex">
                            <Link target="_blank" href={stores[storeName].insta} m={1} ><InstagramIcon fontSize='large' sx={{ color: "#C13584" }} /></Link>
                            <Link target="_blank" href={stores[storeName].face} m={1}><FacebookIcon fontSize='large' sx={{ color: "#4267B2" }} /></Link>
                        </Typography>

                    </Grid>


                </Grid>
            </Drawer>

        </ThemeProvider >
    )
}

export default Detail