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
import Formulario_Compra_Acciones from "../Formularios/Formulario_Compra_Acciones";
import {borrarDoc} from "../../Servicios/BD/borrarDoc";
import {obtenerDoc} from "../../Servicios/BD/obtenerDoc";
import {contarPropiedadSumaWheres} from "../../Servicios/BD/Contadores/contarPropiedadSumaWheres";
import {where} from "firebase/firestore";

const Dialogo_Compra_Acciones = ({realizado, datos, cerrar}) => {
    const {props, obtenerEntidad} = useFormulario({valoresDefecto: datos})
    const {Cargador, abrirCargador, cerrarCargador} = useLoaders({
        logo: logo,
    })


    const guardarCambios = () => {

        obtenerEntidad().then((entidad) => {
            let obj = entidad
            //  obj.fecha = new Date().getTime()
            abrirCargador('Guardando Cambios')

            if (entidad.estado === 'Rechazada') {
                eliminarCompra(obj)
            } else {
                guardarDoc('compraAcciones', obj).then((des) => {
                    if (des.res) {
                        actualizarUsuario(obj)
                    } else {
                        cerrarCargador()
                        alert('Error al subir datos, por favor intentelo nuevamente')
                    }
                })
            }


        })

    }

    const eliminarCompra = (obj) => {
        borrarDoc('compraAcciones', obj.id).then((dox) => {
            if (dox.res) {
                devolverDineroSaldo(obj)
            }
        })
    }

    const devolverDineroSaldo = (obj) => {
        let idUsuario = obj.idUsuario
        let valor = obj.valor + (obj.valor * 0.05) + 1

        obtenerDoc('usuarios', idUsuario).then((dox) => {
            if (dox.res) {
                let usuario = dox.data
                let saldoActual = usuario.saldo ? usuario.saldo : 0
                let saldoNuevo = parseInt(saldoActual) + valor
                actualizarUsuario(obj, saldoNuevo)


            }
        })

    }

    const actualizarUsuario = (obj, saldoNuevo = 0) => {

        let idUsuario = obj.idUsuario
        contarPropiedadSumaWheres({
            coleccion: 'compraAcciones', propiedad: 'valor',
            wheres: [where('idUsuario', '==', idUsuario), where('estado', '==', 'Activa')]
        }).then((dox) => {
            if (dox.res) {

                let accionesActivas = dox.data
                let datos = {
                    acciones: accionesActivas
                }

                if (saldoNuevo > 0) {
                    datos.saldo = saldoNuevo
                }

                actualizarDoc('usuarios', idUsuario, datos).then((des) => {
                    if (des.res) {
                        actualizarTransaccion(obj)
                    }
                })

            }
        })

    }


    const actualizarTransaccion = (obj) => {
        actualizarDoc('transacciones', obj.idTransaccion, {estado: obj.estado}).then((des) => {
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
                <Formulario_Compra_Acciones props={props} estado={datos.estado && datos.estado !== 'Aprobado'}/>
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
export default Dialogo_Compra_Acciones