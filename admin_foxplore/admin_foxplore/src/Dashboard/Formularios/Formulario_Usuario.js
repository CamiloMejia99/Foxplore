/**************************************************
 * Nombre:       Formulario_Productos
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Divider, Grid} from "@mui/material";
import IngresoTexto from "../../Modulo_formularios/Componentes/IngresoTexto";
import {
    AccountCircle,
    Badge,
    BarChart,
    Mail,
    Money,
    Moving,
    PhoneAndroid,
    PriceCheck,
    Wallet
} from "@mui/icons-material";
import IngresoDinero from "../../Modulo_formularios/Componentes/IngresoDinero";

const Formulario_Usuario = ({...props}) => {


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
                    <IngresoTexto Icono={AccountCircle} nombre={'Nombre'} dato={'nombre'}  {...props}

                    />
                </Grid>

                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center'}}>
                    <IngresoTexto Icono={Mail} nombre={'Correo'} dato={'correo'} editable={false} {...props}

                    />
                </Grid>

                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>
                    <IngresoTexto Icono={Badge} nombre={'Cc/Nit'} dato={'cc'}  {...props}

                    />
                </Grid>

                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>
                    <IngresoTexto Icono={PhoneAndroid} nombre={'Numero de Contacto'} dato={'numero'}  {...props}
                    />
                </Grid>

                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center'}}>
                    <Divider sx={{width: '100%'}} />
                </Grid>

                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>
                    <IngresoDinero Icono={Wallet} nombre={'Saldo'} dato={'saldo'}{...props}/>
                </Grid>

                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>
                    <IngresoDinero Icono={BarChart} nombre={'Acciones'} dato={'acciones'}{...props}
                    editable={false}
                    />
                </Grid>

                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>
                    <IngresoDinero Icono={Moving} nombre={'Rendimientos'} dato={'rendimientos'}{...props}/>
                </Grid>

                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>
                    <IngresoDinero Icono={PriceCheck} nombre={'Bonificaciones'} dato={'bonificaciones'}{...props}/>
                </Grid>


            </Grid>
        </form>

    )

}
export default Formulario_Usuario