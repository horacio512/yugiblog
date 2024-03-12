import { createTheme } from "@mui/material"

const Tema = createTheme({

    palette: {
        primary: {
            main: "#ffffff"
        },
        secondary: {
            main: "#B60014 "
        }
    },
    typography: {
        h1: {
            fontSize: "calc(2em + 2vw)",
        },
        h2: {
            fontSize: "calc(1.3em + 1.3vw)",
        },
        h3: {
            fontSize: "calc(1em + 1vw)",
        },
        h4: {
            fontSize: "calc(0.9em + 0.8vw)",
        },
        h5: {
            fontSize: "calc(0.8em + 0.8vw)"
        },
        h6: {
            fontSize: "calc(0.6em + 0.5vw)",
        },
        p: {
            fontSize: "calc(0.7em + 0.7vw)",
        },
        fontFamily: "Blinker"
    }

})

export default Tema
