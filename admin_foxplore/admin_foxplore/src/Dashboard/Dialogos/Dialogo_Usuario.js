/**************************************************
 * Nombre:       Dialogo_Producto_Empresaria
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Button, Grid} from "@mui/material";
import {useFormulario} from "../../Modulo_formularios/Hooks/useFormulario";
import {TaskAlt} from "@mui/icons-material";
import {useLoaders} from "../../Modulo_Loaders/Hooks/useLoaders";
import logo from '../../Recursos/logo_blanco.svg'
import {guardarDoc} from "../../Servicios/BD/guardarDoc";
import Formulario_Usuario from "../Formularios/Formulario_Usuario";

const Dialogo_Usuario = ({realizado, datos, cerrar}) => {
    const {props, obtenerEntidad} = useFormulario({valoresDefecto: datos})
    const {Cargador, abrirCargador, cerrarCargador} = useLoaders({
        logo: logo,
    })


    const guardarCambios = () => {

        obtenerEntidad().then((entidad) => {
            let obj = entidad
            abrirCargador('Guardando Cambios')

            guardarDoc('usuarios', obj).then((des) => {
                if (des.res) {
                    cerrar()
                    cerrarCargador()
                    alert('Cambios guardados con exito')
                    realizado()

                } else {
                    cerrarCargador()
                    alert('Error al subir datos, por favor intentelo nuevamente')
                }
            })

        })

    }


    return (

        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >


            <Cargador/>

            <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center'}}>
                <Formulario_Usuario props={props} estado={datos.estado && datos.estado !== 'Aprobado'} datos={datos}/>
            </Grid>


            <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center', marginTop: 2}}>
                <Button
                    onClick={() => guardarCambios()}
                    startIcon={<TaskAlt/>}
                >
                    Guardar Cambios
                </Button>
            </Grid>


        </Grid>

    )

}
export default Dialogo_Usuario