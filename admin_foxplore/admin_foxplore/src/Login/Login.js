/**************************************************
 * Nombre:       Login
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Button, ButtonBase, Card, Divider, Grid, Typography, useMediaQuery} from "@mui/material";
import {useFormulario} from "../Modulo_formularios/Hooks/useFormulario";
import Formulario_Login from "./Formulario_Login";
import {useLoaders} from "../Modulo_Loaders/Hooks/useLoaders";
import {funIngresarCorreoPass} from "../Servicios/Auth/funIngresarCorreoPass";
import {funRecuperarContrasena} from "../Servicios/Auth/funRecuperarContrasena";
import {theme} from "../Tema";

const Login = ({logo, logoRedondo}) => {
    const sCell = useMediaQuery(theme.breakpoints.only('xs'))
    const masSM = useMediaQuery(theme.breakpoints.up('md'))
    const {props, obtenerEntidad} = useFormulario({valoresDefecto: {}})
    const {Cargador, abrirCargador, cerrarCargador} = useLoaders({logo: logoRedondo})

    const ingresar = () => {

        obtenerEntidad().then((entidad) => {
            abrirCargador('Ingresando a panel de control')
            funIngresarCorreoPass(entidad.correo, entidad.pass).then((dox) => {
                setTimeout(() => {
                    cerrarCargador()
                }, 2000)

            })
        })

    }

    const recuperar = () => {
        obtenerEntidad().then((entidad) => {
            abrirCargador('Enviando instrucciones a correo')
            funRecuperarContrasena(entidad.correo).then((dox) => {
                if (dox.res) {
                    alert('Se ha enviado las instrucciones de cambio de contraseña a su correo')
                } else {
                    alert(dox.data)
                }
                cerrarCargador()
            })
        })
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{backgroundColor: '#fff'}}
        >

            <Cargador/>

            <Grid item container lg={7} sm={5} xs={12}
                  sx={{justifyContent: 'center', py: 6, backgroundColor: '#000', minHeight: sCell ? '20vh' : '100vh'}}>
                <img src={logo} width={'40%'} height={'auto'}/>
            </Grid>

            <Grid item container lg={5} sm={7} xs={12} sx={{justifyContent: 'center'}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{backgroundColor: '#fff', minHeight: sCell ? '80vh' : '100vh', px: sCell ? 4 : 0}}
                >


                    <Grid item container lg={8} sm={9} xs={12} sx={{justifyContent: 'flex-start'}}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={2}
                            sx={{py: 8}}
                        >

                            <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'flex-start'}}>
                                <Typography sx={{fontSize: 32, fontWeight: 800, px: 1}}>Hola!</Typography>
                            </Grid>

                            <Grid item container lg={12} sm={12} xs={12}
                                  sx={{justifyContent: 'flex-start', marginTop: -2}}>
                                <Typography sx={{fontSize: 16, fontWeight: 300, px: 1}}>Ingresa tus credenciales para
                                    acceder</Typography>
                            </Grid>

                            <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'flex-start'}}>
                                <Formulario_Login props={props}/>
                            </Grid>


                            <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center'}}>
                                <Button onClick={() => ingresar()}>Ingresar</Button>
                            </Grid>

                            <Grid item container lg={12} sm={12} xs={12}
                                  sx={{justifyContent: 'flex-end', marginTop: 2}}>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="flex-start"
                                >

                                    <Grid item container lg={6} sm={12} xs={12}
                                          sx={{justifyContent: masSM ? 'flex-start' : 'flex-end'}}>
                                        <ButtonBase
                                            onClick={() => recuperar()}
                                        >
                                            <Typography sx={{fontSize: 14}}>Recuperar mi contraseña</Typography>
                                        </ButtonBase>
                                    </Grid>

                                    {masSM &&
                                        <Divider orientation={'vertical'} color={'#000'}/>
                                    }

                                    <Grid item container lg={4} sm={12} xs={12}
                                          sx={{justifyContent: 'flex-end', marginTop: masSM ? 0 : 1}}>
                                        <ButtonBase
                                            onClick={() => window.open('https://foxplor.app/')}
                                        >
                                            <Typography sx={{fontSize: 14}}>Pagina Principal</Typography>
                                        </ButtonBase>
                                    </Grid>


                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>


                </Grid>
            </Grid>


        </Grid>
    )

}
export default Login    