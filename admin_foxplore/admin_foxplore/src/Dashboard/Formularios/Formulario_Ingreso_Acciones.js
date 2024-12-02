/**************************************************
 * Nombre:       Formulario_Productos
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Grid} from "@mui/material";
import IngresoTexto from "../../Modulo_formularios/Componentes/IngresoTexto";
import {AccountCircle, Flag, Mail, Money} from "@mui/icons-material";
import IngresoSelect from "../../Modulo_formularios/Componentes/IngresoSelect";
import {ESTADOSCOMPRAACCIONES} from "../../Constantes";
import IngresoDinero from "../../Modulo_formularios/Componentes/IngresoDinero";
import IngresoFecha from "../../Modulo_formularios/Componentes/IngresoFecha";

const Formulario_Ingreso_Acciones = ({...props}) => {


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

                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>

                    <IngresoSelect Icono={Flag} nombre={'Estado'} dato={'estado'}
                                   editable={false}
                                   opciones={ESTADOSCOMPRAACCIONES}  {...props}

                    />
                </Grid>

                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>
                    <IngresoFecha nombre={'Fecha de Ingreso'} dato={'fecha'} opciones={ESTADOSCOMPRAACCIONES}  {...props}
                                  editable={props.estado}
                    />
                </Grid>


                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center'}}>
                    <IngresoTexto Icono={Mail} nombre={'Correo de usuario'} dato={'correo'}
                                  requerido={'El correo del usuario es requerido'}
                                  {...props}

                    />
                </Grid>


                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>
                    <IngresoDinero Icono={Money} nombre={'Valor Compra (USD)'} dato={'valor'}
                                   {...props}
                    />
                </Grid>


            </Grid>
        </form>

    )

}
export default Formulario_Ingreso_Acciones