/**************************************************
 * Nombre:       Seccion_Categorias
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     12 Hr
 **************************************************/
import {Grid, useMediaQuery} from "@mui/material";
import {useEffect, useState} from "react";
import {useDialogo} from "../../Modulo_dialogos/Hooks/useDialogo";
import TituloNotificaciones from "../../Modulo_dashboard/ComponentesSecundarios/TituloNotificaciones";
import TablaBasica from "../../Modulo_tablas/Componentes/TablaBasica";
import {theme} from "../../Tema";
import {ManageSearch} from "@mui/icons-material";
import {contarColeccionWhere} from "../../Servicios/BD/Contadores/contarColeccionWhere";
import {where} from "firebase/firestore";
import {useObtenerColleccionTablaWhere} from "../../Servicios/BD/useObtenerColleccionTablaWhere";
import Dialogo_Usuario from "../Dialogos/Dialogo_Usuario";

const Seccion_Usuarios = () => {
    const sCell = useMediaQuery(theme.breakpoints.only('xs'))
    const [numUsuarios, setNumUsuarios] = useState(0)
    const [recargar, setRecargar] = useState(false)
    const [wheres, setWheres] = useState([where('tipo', '!=', 'admin')])
    const {props, cargarNuevamente} = useObtenerColleccionTablaWhere({
        coleccion: 'usuarios',
        filtroInicial: 'fecha',
        dirInicial: 'desc',
        wheres: wheres
    })
    const {Dialogo, abrir} = useDialogo({
        Componente: Dialogo_Usuario,
        realizado: () => setRecargar(!recargar),
        titulo: 'Detalle de Usuario',
        grande: false,
    })

    const manejardorClicks = (row, id) => {

        switch (id) {
            case 'ver' :
                abrir(row)
                break
        }

    }

    const botones = []


    useEffect(() => {


        contarColeccionWhere({coleccion: 'usuarios', wheres: [where('tipo', '!=', 'admin')]}).then((dox) => {
            if (dox.res) {
                setNumUsuarios(dox.data)
            }
        })

        cargarNuevamente()

    }, [recargar]);
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >

            <Dialogo/>

            <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'flex-start'}}>
                <TituloNotificaciones titulo={'Usuarios'} textoComplementario={'en lista'}
                                      textoResaltado={`${numUsuarios} Usuarios`} botones={botones}/>
            </Grid>

            <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'flex-start', marginTop: 5}}>
                <TablaBasica
                    filtros={filtros}
                    datosCabecera={sCell ? datosCabeceraCell : datosCabecera}
                    {...props}
                    click={manejardorClicks}
                    botonesTabla={botonesTabla}
                    numeroFilas={numUsuarios}
                />
            </Grid>


        </Grid>
    )

}
export default Seccion_Usuarios

const filtros = [
    {
        nombre: 'Mas Reciente',
        propiedad: 'fecha',
        direccion: 'desc'

    },
    {
        nombre: 'Nombre',
        propiedad: 'nombre',

    },
    {
        nombre: 'Saldo',
        propiedad: 'saldo',
        direccion: 'desc'

    }
]

const datosCabecera = [
    {
        nombre: 'Nombre',
        direccion: 'left',
        propiedad: 'nombre',
        tipo: 'fechaDato'

    },
    {
        nombre: 'Correo',
        direccion: 'left',
        propiedad: 'correo',

    },
    {
        nombre: 'Saldo',
        direccion: 'left',
        propiedad: 'saldo',
        tipo: 'moneda'

    },
    {
        nombre: 'Acciones',
        direccion: 'right',
        propiedad: 'acciones',
        tipo: 'moneda'

    }


]


const datosCabeceraCell = [
    {
        nombre: 'Fecha',
        direccion: 'left',
        propiedad: 'fecha',
        tipo: 'fecha'

    },
    {
        nombre: 'Nombre',
        direccion: 'right',
        propiedad: 'nombre',

    }
]

const botonesTabla = [
    {
        nombre: 'Ver',
        icono: ManageSearch,
        id: 'ver'
    },

]



