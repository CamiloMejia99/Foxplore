/**************************************************
 * Nombre:       TituloNotificaciones
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Badge, Grid, IconButton, Typography, useMediaQuery} from "@mui/material";
import {NotificationsOutlined} from "@mui/icons-material";
import {theme} from "../../Tema";

const TituloNotificaciones = ({titulo, textoResaltado = '', textoComplementario = '', botones = []}) => {
    const sCell = useMediaQuery(theme.breakpoints.only('xs'))

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems={'center'}
            sx={{borderBottom: 1, borderColor: '#00000040', pb: sCell ? 4 : 5.5}}
        >

            <Grid item container lg={8} sm={10} xs={8} sx={{justifyContent: 'flex-start'}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                >

                    <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'flex-start'}}>
                        <Typography sx={{fontSize: sCell ? 28 : 40, fontWeight: 700, fontFamily: "Poppins", lineHeight: 1}}>
                            {titulo}
                        </Typography>
                    </Grid>
                    <Grid item container lg={12} sm={12} xs={12}
                          sx={{justifyContent: 'flex-start', marginTop: sCell ? -0.5 : 1}}>
                        <Typography sx={{fontSize: sCell ? 12 : 16, fontWeight: 400, fontFamily: "Montserrat"}}>
                            <span style={{color: theme.palette.primary.main, paddingRight: 5}}>{textoResaltado}</span>
                            {textoComplementario}
                        </Typography>
                    </Grid>

                </Grid>

            </Grid>

            <Grid item container lg={4} sm={2} xs={4} sx={{justifyContent: 'flex-end'}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-start"
                >
                    {botones.map((it, index) => (
                        <Grid key={`se-${index}`} item container lg={6} sm={12} xs={12}
                              sx={{justifyContent: 'flex-end'}}>
                            {it}
                        </Grid>

                    ))}


                </Grid>
            </Grid>


        </Grid>
    )

}
export default TituloNotificaciones