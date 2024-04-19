import React from 'react'
import { Grid, Typography, ThemeProvider, Link, Button } from '@mui/material'
import Tema from '../assets/Tema'
import top from "../assets/images/top.webp"
import top8 from "../info.json"

const Home = () => {


    return (
        <ThemeProvider theme={Tema}>
            <Grid container display="flex" justifyContent="center" alignItems="space-between" mt={2} mb={15}>

                <Grid item xs={12} mb={3}>
                    <Typography textAlign="center" variant="h1" color="#FFD700" fontWeight={600} mb={1}>WCQ Regional Montevideo</Typography>
                </Grid>

                <Grid item xs={11} sm={5} textAlign="center" mb={4}>

                    <Grid item xs={12} display="flex" justifyContent="space-around" mb={3}>
                        <Typography variant="h2" fontWeight={600} color="primary">Top 8</Typography>
                        <Typography variant="h2" fontWeight={600} color="primary">Deck</Typography>
                    </Grid>

                    {Object.values(top8.top.names).map((info, index) => (
                        <Grid item xs={12} display="flex" key={index} justifyContent="space-evenly">

                            <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
                                <Typography variant="h4" color="primary">{index + 1}-</Typography>
                                <Button target="_blank" color="secondary" sx={{ width: "100%", "&:hover": { backgroundColor: "#B60014" } }} href={info.insta}>
                                    <Typography variant="h4" color="primary" mb={1}>{info.name} </Typography>
                                </Button>
                            </Grid>

                            <Grid item xs={6} display="flex" justifyContent="center" alignItems="center">
                                <Button target="_blank" color="secondary" sx={{ width: "100%", "&:hover": { backgroundColor: "#B60014" } }} href={info.list}>
                                    <Typography variant="h4" color="primary" mb={1}>{info.deck} </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>


                <Grid item xs={11} sm={5} textAlign="center" alignContent="center">

                    <img src={top} loading="eager" alt="logo" title="pie chart" width="90%" height="auto" />
                </Grid>

                <Grid item xs={11} sm={10}>

                </Grid>

            </Grid>
        </ThemeProvider>
    )
}

export default Home
