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
import Formulario_Deposito from "../Formularios/Formulario_Deposito";
import {obtenerDoc} from "../../Servicios/BD/obtenerDoc";
import {actualizarDoc} from "../../Servicios/BD/actualizarDoc";

const Dialogo_Deposito = ({realizado, datos, cerrar}) => {
    const {props, obtenerEntidad} = useFormulario({valoresDefecto: datos})
    const {Cargador, abrirCargador, cerrarCargador} = useLoaders({
        logo: logo,
    })


    const guardarCambios = () => {

        obtenerEntidad().then((entidad) => {
            let obj = entidad
            obj.fecha = new Date().getTime()
            abrirCargador('Guardando Cambios')

            guardarDoc('depositos', obj).then((des) => {
                if (des.res) {
                    if (obj.estado === 'Aprobado'){
                        aumentarSaldo(obj)
                    }else{
                        cerrar()
                        cerrarCargador()
                        alert('No se agrego a saldo de usuario ningun valor')
                        realizado()
                    }

                } else {
                    cerrarCargador()
                    alert('Error al subir datos, por favor intentelo nuevamente')
                }
            })


        })

    }

    const aumentarSaldo = (obj) => {

        let idUsuario = obj.idUsuario
        let valorDepositado = obj.valor

        obtenerDoc('usuarios', idUsuario).then((dox) => {
            if (dox.res) {
                let usuario = dox.data
                let saldo = 0
                if (usuario.saldo) {
                    saldo = parseFloat(usuario.saldo)
                }

                saldo += valorDepositado

                actualizarDoc('usuarios', idUsuario, {saldo: saldo}).then((des) => {
                    if (des.res) {
                        actualizarTransaccion(obj)
                    } else {
                        cerrarCargador()
                        alert('Error al subir datos, por favor intentelo nuevamente')
                    }
                })

            }
        })


    }

    const actualizarTransaccion = (obj) => {
        actualizarDoc('transacciones', obj.idTransaccion, {estado: 'Aprobado'}).then((des) => {
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
                <Formulario_Deposito props={props} estado={datos.estado && datos.estado !== 'Aprobado'} imagen={datos.img}/>
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
export default Dialogo_Deposito