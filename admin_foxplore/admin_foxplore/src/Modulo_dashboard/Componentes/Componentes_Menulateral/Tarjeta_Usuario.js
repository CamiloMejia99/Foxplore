/**************************************************
 * Nombre:       Tarjeta_Usuario
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Avatar, ButtonBase, Fade, Grid, Typography} from "@mui/material";
import {theme} from "../../../Tema";

const Tarjeta_Usuario = ({open, click, color='#fff', usuario}) => {

    return (
        <ButtonBase
            onClick={() => click()}
            sx={{
                width: '100%',
                textAlign: 'left',
                borderRadius: 2,
                marginTop: 4.5,
                marginRight: open ? '25px' : '18px',
            }}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                    p: '12px',
                    borderRadius: '4px',
                    backgroundColor: theme.palette.primary.main,
                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                    marginLeft: '5px',
                    marginRight: '5px',
                    marginBottom: open ? 0 : 1,

                }}

            >

                <Grid item container lg={open ? 3 : 12} sm={3} xs={3}
                      sx={{justifyContent: open ? 'flex-start' : 'center'}}>
                    <Avatar src={usuario.img} sx={{height: open ? 40 : 30, width: open ? 40 : 30}}/>
                </Grid>

                <Grid item container lg={9} sm={9} xs={9}
                      sx={{
                          justifyContent: 'flex-start',
                          transition: "all .4s ease-in-out",
                          display: open ? 'block' : 'none'
                      }}>
                    <Fade in={open} timeout={2500}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="flex-start"
                            sx={{ml: -0.7}}
                        >

                            <Grid item container lg={12} sm={12} xs={12}
                                  sx={{justifyContent: 'flex-start'}}>
                                <Typography sx={{fontSize: 16, fontWeight: 500, color: color, fontFamily: 'Poppins'}}>
                                    {usuario.nombre}
                                </Typography>
                            </Grid>

                            <Grid item container lg={12} sm={12} xs={12}
                                  sx={{justifyContent: 'flex-start', marginTop: -0.3}}>
                                <Typography sx={{fontSize: 12, color: color, fontFamily: 'Montserrat'}}>
                                    {usuario.tipo}
                                </Typography>
                            </Grid>

                        </Grid>
                    </Fade>
                </Grid>

            </Grid>
        </ButtonBase>
    )

}
export default Tarjeta_Usuario