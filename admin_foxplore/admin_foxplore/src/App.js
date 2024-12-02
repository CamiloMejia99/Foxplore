import React, {createContext, useEffect, useState} from 'react';
import './App.css';
import {Grid} from "@mui/material";
import {theme} from "./Tema";
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import {iniciarAnaliticas} from "./Servicios/Analiticas/iniciarAnaliticas";
import {ThemeProvider} from "@mui/system";
import {useEscucharUsuarioToCorreo} from "./Servicios/BD/useEscucharUsuarioToCorreo";
import {useEscucharAuth} from "./Servicios/Auth/useEscucharAuth";
import Login from "./Login/Login";
import logo from './Recursos/logo_blanco.svg'
import logo_redondo from './Recursos/logo_redondo.svg'
import Dashboard from "./Dashboard/Dashboard";

export const usuarioContext = createContext();

function App() {
    const {email} = useEscucharAuth()
    const {usuario} = useEscucharUsuarioToCorreo({correo: email})


    const valoresProvider = {
        usuario,
    }

    const {Provider} = usuarioContext;


    useEffect(() => {

        iniciarAnaliticas()

        if (window.swUpdateReady) {
            window.swUpdateReady = false;
            window.stop();
            window.location.reload();
        }


    }, [])


    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
        >

            <Provider value={valoresProvider}>
                {usuario ?
                    <ThemeProvider theme={theme}>
                        <Dashboard/>
                    </ThemeProvider>

                    :
                    <Login logo={logo} logoRedondo={logo_redondo}/>
                }

            </Provider>
        </Grid>
    );
}

export default App;
