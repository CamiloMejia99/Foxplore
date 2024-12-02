/**************************************************
 * Nombre:       MenuScroll
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {ButtonBase, Divider, Fade, Grid, Typography} from "@mui/material";
import ScrollBar from "react-perfect-scrollbar";
import {AddAlarmTwoTone, AddBox, BrowseGallery} from "@mui/icons-material";
import {useLocation, useNavigate} from "react-router-dom";
import {theme} from "../../../Tema";

const MenuScroll = ({open, menusOrdenados = [], masSM}) => {
    const navigate = useNavigate();
    const location = useLocation()

    return (
        <ScrollBar options={{suppressScrollX: true}}
                   style={{width: '100%', maxHeight: open ? '58vh' : '50vh',}}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                sx={{
                    marginTop: 0,
                    maxHeight: open ? '58vh' : '50vh',
                    paddingLeft: '5px',
                    paddingRight: open ? '30px' : '18px',

                }}


            >


                {menusOrdenados.map((menu, indexCat) => {
                    let items = menu.items ? menu.items : []
                    return (
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="flex-start"
                            key={`men-${indexCat}`}
                            sx={{marginTop: open ? 2.2 : 0}}
                        >
                            {open && menu.categoria !== 'propia' ? <Grid item container lg={12} sm={12} xs={12}
                                                                         sx={{
                                                                             justifyContent: 'flex-start',
                                                                             display: open ? 'block' : 'none',
                                                                             marginTop: 2.2,
                                                                             marginBottom: 1
                                                                         }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: 15,
                                            color: '#fff',
                                            fontFamily: 'Poppins'
                                        }}>{menu && menu.categoria && menu.categoria.toUpperCase()}</Typography>
                                </Grid>
                                :
                                <Divider sx={{width: '100%', display: indexCat > 0 ? 'block' : 'none', mt: 2, mb: 1}}/>
                            }


                            {items.map((it, index) => {

                                return (
                                    <ButtonBase
                                        onClick={() => navigate(it.camino)}
                                        key={`btn-${index}`}
                                        sx={{
                                            width: '100%',
                                            textAlign: 'left',
                                            py: 0.5,
                                            borderRadius: '8px',
                                            transition: "all .2s ease-in-out",
                                            backgroundColor: location.pathname === it.camino ? '#FFF' : '',
                                            boxShadow: location.pathname === it.camino ? 2 : 0,
                                            marginTop: indexCat > 0 ? 1 : 0
                                        }}>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"

                                        >

                                            <Grid item container lg={open ? 2 : 12} sm={2} xs={2}
                                                  sx={{justifyContent: 'center', pl: masSM ? 0 : 0.4}}>
                                                <it.icono sx={{
                                                    width: '32px',
                                                    height: '32px',
                                                    fill: location.pathname === it.camino ? theme.palette.primary.main : '#ffffff90'
                                                }}/>
                                            </Grid>
                                            <Fade in={open} timeout={2500}>
                                                <Grid item container lg={9} sm={9} xs={9}
                                                      sx={{
                                                          justifyContent: 'flex-start',
                                                          marginTop: 0,
                                                          display: open ? 'block' : 'none',
                                                          pl: 1.5,

                                                      }}>
                                                    <Typography sx={{
                                                        fontFamily: 'Poppins',
                                                        fontWeight: 500,
                                                        fontSize: '16px',
                                                        color: location.pathname === it.camino ? '#000' : '#ffffff90'
                                                    }}>{it.nombre}</Typography>
                                                </Grid>
                                            </Fade>

                                        </Grid>

                                    </ButtonBase>
                                )
                            })}
                        </Grid>
                    )
                })}


            </Grid>

        </ScrollBar>
    )

}
export default MenuScroll

const lista = [
    {
        nombre: 'Alarmas',
        icono: AddAlarmTwoTone
    },
    {
        nombre: 'Pedidos',
        icono: AddBox
    },
    {
        nombre: 'Articulos',
        icono: BrowseGallery
    },
    {
        nombre: 'Alarmas',
        icono: AddAlarmTwoTone
    },
    {
        nombre: 'Pedidos',
        icono: AddBox
    },
    {
        nombre: 'Articulos',
        icono: BrowseGallery
    },
    {
        nombre: 'Alarmas',
        icono: AddAlarmTwoTone
    },
    {
        nombre: 'Pedidos',
        icono: AddBox
    },
    {
        nombre: 'Articulos',
        icono: BrowseGallery
    },
    {
        nombre: 'Alarmas',
        icono: AddAlarmTwoTone
    },
    {
        nombre: 'Pedidos',
        icono: AddBox
    },
    {
        nombre: 'Articulos',
        icono: BrowseGallery
    }

]