/**************************************************
 * Nombre:       Formulario_Productos
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Grid, Typography} from "@mui/material";

import {
    AccountCircle,
    Apartment,
    Badge,
    Flag,
    HomeWork,
    Mail, Password,
    PermIdentity,
    PhoneAndroid,
    School
} from "@mui/icons-material";
import IngresoTexto from "../Modulo_formularios/Componentes/IngresoTexto";


const Formulario_Login = ({...props}) => {


    return (
        <form noValidate style={{width: '100%'}}>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
                sx={{p: 1}}
            >


                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center'}}>
                    <IngresoTexto Icono={Mail} nombre={'Correo registrado'} dato={'correo'}  {...props}
                                  requerido={'El Correo ese requerido'}

                    />
                </Grid>

                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center'}}>
                    <IngresoTexto Icono={Password} nombre={'Constraseña'} dato={'pass'} type={'password'} {...props}

                    />
                </Grid>


            </Grid>
        </form>

    )

}
export default Formulario_Login