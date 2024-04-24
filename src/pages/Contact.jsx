import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import Tema from '../assets/Tema'
import { Button, Grid, TextField, Typography } from '@mui/material'
import emailjs from "@emailjs/browser"

const Contact = () => {


    const [status, setStatus] = useState(400)

    const sendMail = (e) => {
        e.preventDefault()
        emailjs.sendForm("service_tyf8tp9", "template_fqsovm9", e.target, "Oe7b_WInIH2SDxkwo")
            .then(response => setStatus(response))
            .catch(error => console.log(error))
            .then(e.target.reset())
            .then(setTimeout(() => { setStatus(400) }, 10000))
    }

    return (
        <ThemeProvider theme={Tema}>
            <Grid container justifyContent="center" mt={8} id="contacto">
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h1" fontWeight={600} color="primary">Contactese con nosotros</Typography>
                </Grid>

                <form onSubmit={sendMail}>
                    <Grid container display="flex" justifyContent="space-evenly" alignItems="center" >

                        <Grid item xs={11} sm={5} mt={3} mb={2}>
                            <TextField name="name" placeholder="Ingrese su nombre" variant="standard" type="text" focused
                                fullWidth inputProps={{ style: { color: "#ffffff", fontWeight: 600, fontSize: "calc(0.9em + 0.8vw)", textAlign: "center", } }} required />
                        </Grid>

                        <Grid item xs={11} sm={5}>
                            <TextField name="email" placeholder="Ingrese su correo" variant="standard" type="email" focused
                                fullWidth inputProps={{ style: { color: "#ffffff", fontWeight: 600, fontSize: "calc(0.9em + 0.8vw)", textAlign: "center" } }} required />
                        </Grid>

                        <Grid item xs={11} sm={8} mt={3} mb={2}>
                            <TextField name="msg" placeholder="Mensaje" variant="outlined" type="text" multiline rows={6} focused
                                sx={{ textArea: { color: "#ffffff", fontWeight: 600, fontSize: "calc(0.9em + 0.8vw)" } }}
                                fullWidth required />
                        </Grid>

                        <Grid item xs={6} mt={4} display="flex" justifyContent="center">
                            <Button type="submit" variant="contained" color="secondary" >
                                <Typography variant="h4" p={2}>Enviar</Typography></Button>
                        </Grid>

                        <Grid item xs={10}>

                            <Grid item xs={12}>

                                <Typography variant="h3" fontWeight={500} textAlign="center" color="primary"
                                    visibility={status.status === 200 ? ("visible") : ("hidden")}>
                                    Tu mensaje fue enviado, si es necesario nos contactaremos a la brevedad</Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                </form>

            </Grid>

        </ThemeProvider>
    )
}

export default Contact