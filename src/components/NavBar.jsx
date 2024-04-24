import React, { useState } from 'react'
import { AppBar, Box, Button, Drawer, ThemeProvider, Typography } from '@mui/material'
import { HashLink } from "react-router-hash-link"
import Tema from '../assets/Tema'
import MenuIcon from '@mui/icons-material/Menu';
import yugitcg from "../assets/images/yugitcg.svg"

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const titles = [{ name: "Inicio" }, { name: "Torneos" }, { name: "Contacto" }]


    return (
        <ThemeProvider theme={Tema}>
            <AppBar sx={{ background: { xs: "black" }, paddingBottom: 1 }} position='sticky'>
                <Box display="flex" justifyContent="center" mt={{ xs: 1, sm: 2 }}>

                    <Box component="img" mr={1} alt="yugioh logo" loading="eager" title="yugioh logo" sx={{
                        maxHeight: { xs: 60 },
                        maxWidth: { xs: 187 },
                    }} src={yugitcg} />

                    <Box justifyContent="center" sx={{ display: { xs: "none", sm: "flex" } }} >
                        {titles.map((names, index) => (
                            <Button key={index} variant="text" color="secondary" sx={{
                                ':hover': {
                                    bgcolor: 'secondary.main',
                                    color: 'white',
                                },
                            }}>

                                <HashLink smooth to={`#${names.name.toLocaleLowerCase()}`} >
                                    <Typography color="primary" variant='h3' fontWeight={600} p={1}>{names.name}</Typography>
                                </HashLink>

                            </Button>
                        ))}
                    </Box>

                    <Box justifyContent="end" sx={{ display: { xs: "flex", sm: "none" } }}>
                        <Button onClick={() => { setOpen(true) }}><MenuIcon fontSize='large' /></Button>
                        <Drawer
                            PaperProps={{ sx: { height: '60vh', top: "11%", right: "1%", width: "98%", backgroundColor: "#272525" } }}
                            anchor="right"
                            open={open}
                            onClose={() => { setOpen(false) }}
                        >
                            {titles.map((names, index) => (
                                <Button key={index} variant="text" sx={{ border: 1 }}>
                                    <HashLink smooth to={`#${names.name.toLocaleLowerCase()}`} >
                                        <Typography color="primary" variant='h3' fontWeight={600} p={1}>{names.name}</Typography>
                                    </HashLink>
                                </Button>
                            ))}

                        </Drawer>
                    </Box>
                </Box>
            </AppBar>


        </ThemeProvider>
    )
}

export default NavBar