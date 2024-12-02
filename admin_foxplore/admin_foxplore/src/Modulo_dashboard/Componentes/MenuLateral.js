/**************************************************
 * Nombre:       MenuLateral
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Drawer, Grid, IconButton, useMediaQuery, useTheme} from "@mui/material";
import {LogoutOutlined} from "@mui/icons-material";
import {useState} from "react";
import Tarjeta_Usuario from "./Componentes_Menulateral/Tarjeta_Usuario";
import MenuScroll from "./Componentes_Menulateral/MenuScroll";
import Logo_Boton from "./Componentes_Menulateral/Logo_Boton";
import Barra_Celular from "./Componentes_Menulateral/Barra_Celular";
import MainDashboard from "./MainDashboard";

const MenuLateral = ({
                         logo,
                         menusOrdenados,
                         clickPerfil,
                         secciones,
                         seccionesID,
                         anchoDrawer,
                         logoRedondo,
                         logoBlanco,
                         usuario = {},
                         salir = null,
                         credenciales
                     }) => {
    const theme = useTheme()
    const masSM = useMediaQuery(theme.breakpoints.up('md'))
    const [open, setOpen] = useState(masSM)
    const anchoMax = anchoDrawer
    const anchoMin = 100


    return (

        <>
            <Drawer
                onClose={() => setOpen(false)}
                open={open}
                anchor={'left'}
                variant={masSM ? 'permanent' : 'temporary'}
                PaperProps={{
                    sx: {
                        border: 0,
                        backgroundColor: theme.palette.primary.light,
                        boxShadow: 0,
                        borderRadius: '0px 32px 0px 0px',

                    }
                }}

            >
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    sx={{
                        width: open ? anchoMax : anchoMin,
                        height: '100vh',
                        maxHeight: '100vh',
                        borderTopRightRadius: '32px',
                        paddingLeft: open ? '32px' : '23px',
                        paddingTop: '72px',
                        transition: "all .4s ease-in-out",
                        overflowY: 'hidden'

                    }}

                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <Logo_Boton open={open} setOpen={setOpen} logoRedondo={logoRedondo} logo={logo}/>

                        <Tarjeta_Usuario open={open} click={clickPerfil} usuario={usuario}/>

                        <MenuScroll open={open} setOpen={setOpen} menusOrdenados={menusOrdenados} masSM={masSM} credenciales={credenciales}/>

                        <Grid item container lg={12} sm={12} xs={12}
                              sx={{justifyContent: 'flex-start', marginTop: 4,}}>
                            <IconButton
                                onClick={() => salir && salir && salir()}
                            >
                                <LogoutOutlined sx={{width: 35, height: 35, fill: '#000'}}/>
                            </IconButton>

                        </Grid>

                    </Grid>


                </Grid>

            </Drawer>

            {!masSM &&

                <Barra_Celular setOpen={setOpen} logo={logoBlanco} masSM={masSM}/>
            }


            <MainDashboard open={open} secciones={secciones} credenciales={credenciales} masSM={masSM} seccionesID={seccionesID}/>

        </>
    )

}
export default MenuLateral

