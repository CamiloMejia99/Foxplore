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
import {actualizarDoc} from "../../Servicios/BD/actualizarDoc";
import Formulario_Ingreso_Acciones from "../Formularios/Formulario_Ingreso_Acciones";
import {obtenerDoc} from "../../Servicios/BD/obtenerDoc";
import {getID} from "../../Servicios/BD/useEscucharUsuarioToCorreo";

const Dialogo_Ingreso_Acciones = ({realizado, datos, cerrar}) => {
    const {props, obtenerEntidad} = useFormulario({valoresDefecto: datos})
    const {Cargador, abrirCargador, cerrarCargador} = useLoaders({
        logo: logo,
    })


    const guardarCambios = () => {

        obtenerEntidad().then((entidad) => {

            let id = getID(entidad.correo)
            abrirCargador('Ingresando acciones')
            obtenerDoc('usuarios', id).then((dox) => {
                if (dox.res && dox.data) {
                    let usuario = dox.data
                    comprarAccion(usuario, entidad.valor, entidad.fecha)
                }else{
                    cerrarCargador()
                    alert('usuario con correo ' + entidad.correo + ' no encontrado en base de datos')
                }
            })


        })

    }

    const comprarAccion = (usuario, valor, fecha) => {

        let idTransaccion = new Date().getTime() + 'TRA'
        let objCompraAccion = {
            nombre: usuario.nombre,
            idUsuario: usuario.id,
            correo: usuario.correo,
            fecha: fecha,
            valor: valor,
            estado: 'Por Ingresar',
            idTransaccion: idTransaccion
        }
        guardarDoc('compraAcciones', objCompraAccion).then((dox) => {
            if (dox.res) {
                actualizarUsuario(usuario, dox.data, idTransaccion, valor, fecha)
            }
        })

    }

    const actualizarUsuario = (usuario, id, idTransaccion, valor, fecha) => {


        let accionesActuales = 0
        if (usuario.acciones) {
            accionesActuales = parseFloat(usuario.acciones)
        }

        let datos = {
            acciones: accionesActuales + valor
        }

        actualizarDoc('usuarios', usuario.id, datos).then((dox) => {
            if (dox.res) {
                crearTransaccion(usuario, id, idTransaccion, valor, fecha)
            }
        })
    }

    const crearTransaccion = (usuario, id, idTransaccion, valor, fecha) => {

        let datosTrans = {
            id: idTransaccion,
            idUsuario: usuario.id,
            idDeposito: id,
            valor: valor,
            dirOrigen: 'saldo',
            dirDestino: 'acciones',
            codAprobacion: new Date().getTime(),
            fecha: fecha,
            estado: 'Por Ingresar',
            tipo: 'Compra Accion',
            token: 'saldo',
            red: 'FOXPLOR',
            nombre: usuario.nombre
        }


        guardarDoc('transacciones', datosTrans).then((dox) => {
            if (dox.res) {
                cerrarCargador()
                alert('Compra de Accion realizada con exito')
                cerrar()
                realizado()
            }
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
                <Formulario_Ingreso_Acciones props={props}/>
            </Grid>

            {datos.estado && datos.estado !== 'Aprobado' &&
                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'center', marginTop: 2}}>
                    <Button
                        onClick={() => guardarCambios()}
                        startIcon={<TaskAlt/>}
                    >
                        Guardar Cambios
                    </Button>
                </Grid>
            }


        </Grid>

    )

}
export default Dialogo_Ingreso_Acciones