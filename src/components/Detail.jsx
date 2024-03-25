import React, { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import Tema from '../assets/Tema'
import { Drawer, Grid, Link, Typography } from '@mui/material'
import stores from "../info.json"

/*icons*/
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Detail = ({ storeName, openNew }) => {

    const [open, setOpen] = useState(false)

    useEffect(() => {
        setOpen(true)
    }, [])

    return (
        <ThemeProvider theme={Tema}>


            <Drawer PaperProps={{ sx: { height: '80vh', top: "11%", right: "0%", width: "100%", backgroundColor: "#272525" } }}
                anchor="right"
                open={open}
                onClose={() => { setOpen(false) }}
            >

                <Grid container display="flex" justifyContent="center">

                    <Grid item xs={11} sm={10} mt={3} textAlign="center">
                        <Typography variant="h2" fontWeight={400} color="primary">Organiza: {stores[storeName].store} </Typography>
                        <Typography variant='h2' mt={1} fontWeight={300} color="primary">Ubicación: {stores[storeName].dir}</Typography>
                    </Grid>
                    <Grid item xs={10} sm={6} mt={2}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.05333721711!2d-56.20572772533256!3d-34.905110973476056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f802a05a31c03%3A0x463b367338bd0fc8!2s25%20de%20Mayo%20626%2C%2011000%20Montevideo%2C%20Departamento%20de%20Montevideo!5e0!3m2!1ses-419!2suy!4v1711399638538!5m2!1ses-419!2suy"
                            width="100%" height="auto" frameborder="0"></iframe>
                        <Typography variant='h4' mt={1} fontWeight={300} color="primary">{stores[storeName].dir}</Typography>
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