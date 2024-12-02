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
import {AccountCircle, Flag, Money, QrCodeScanner} from "@mui/icons-material";
import IngresoSelect from "../../Modulo_formularios/Componentes/IngresoSelect";
import {ESTADOSDEPOSITO} from "../../Constantes";
import IngresoDinero from "../../Modulo_formularios/Componentes/IngresoDinero";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Formulario_Deposito = ({...props}) => {


    return (
        <form noValidate style={{width: '100%'}}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{p: 1}}
            >

                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>

                    <IngresoSelect Icono={Flag} nombre={'Estado'} dato={'estado'} opciones={ESTADOSDEPOSITO}  {...props}
                                   editable={props.estado}
                    />
                </Grid>

                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>

                </Grid>

                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center'}}>
                    <IngresoTexto Icono={AccountCircle} nombre={'Nombre'} dato={'nombre'}  {...props}
                                  editable={false}
                    />
                </Grid>

                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center'}}>
                    <IngresoTexto Icono={QrCodeScanner} nombre={'Direccion Destino'} dato={'dirDestino'}  {...props}
                                  lineas={2}
                                  editable={false}
                    />
                </Grid>

                {/*    <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center'}}>
                    <IngresoTexto Icono={QrCode} lineas={2} nombre={'Direccion Origen'} dato={'dirOrigen'}  {...props}
                                  editable={false}
                    />
                </Grid>


                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center'}}>
                    <IngresoTexto Icono={QrCode2} nombre={'Hash de aprobacion'} dato={'codAprobacion'}  {...props}
                                  lineas={2}
                                  editable={false}
                    />
                </Grid>*/}

                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>
                    <IngresoDinero Icono={Money} nombre={'Valor Deposito (USD)'} dato={'valor'}
                                   editable={false}
                                   {...props}
                    />
                </Grid>

                <Grid item container lg={6} sm={6} xs={6} sx={{justifyContent: 'center'}}>

                </Grid>

                <Grid item container lg={8} sm={12} xs={12} sx={{justifyContent: 'center'}}>
                    <Zoom>
                        <img src={props.imagen} width={'80%'} height={'auto'}/>
                    </Zoom>
                </Grid>


            </Grid>
        </form>

    )

}
export default Formulario_Deposito