/**************************************************
 * Nombre:       Seccion_Categorias
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     12 Hr
 **************************************************/
import {Button, Grid, useMediaQuery} from "@mui/material";
import {useObtenerColleccionTabla} from "../../Servicios/BD/useObtenerColleccionTabla";
import {useEffect, useState} from "react";
import {useDialogo} from "../../Modulo_dialogos/Hooks/useDialogo";
import TituloNotificaciones from "../../Modulo_dashboard/ComponentesSecundarios/TituloNotificaciones";
import TablaBasica from "../../Modulo_tablas/Componentes/TablaBasica";
import {theme} from "../../Tema";
import {BarChart, ManageSearch} from "@mui/icons-material";
import {contarColeccionWhere} from "../../Servicios/BD/Contadores/contarColeccionWhere";
import {where} from "firebase/firestore";
import Dialogo_Compra_Acciones from "../Dialogos/Dialogo_Compra_Acciones";
import Dialogo_Ingreso_Acciones from "../Dialogos/Dialogo_Ingreso_Acciones";

const Seccion_Acciones = () => {
    const sCell = useMediaQuery(theme.breakpoints.only('xs'))
    const [numCompras, setNumCompras] = useState(0)
    const [recargar, setRecargar] = useState(false)
    const {props, cargarNuevamente} = useObtenerColleccionTabla({
        coleccion: 'compraAcciones',
        filtroInicial: 'fecha',
        dirInicial: 'desc'
    })
    const {Dialogo, abrir} = useDialogo({
        Componente: Dialogo_Compra_Acciones,
        realizado: () => setRecargar(!recargar),
        titulo: 'Detalle de Compra',
        grande: false,
    })

    const {Dialogo: DialogoIngreso, abrir: abrirIngreso} = useDialogo({
        Componente: Dialogo_Ingreso_Acciones,
        realizado: () => setRecargar(!recargar),
        titulo: 'Ingreso de Acciones',
        grande: false,
    })

    const manejardorClicks = (row, id) => {

        switch (id) {
            case 'ver' :
                abrir(row)
                break
        }

    }

    const botones = [

        <Button
            onClick={() => abrirIngreso({estado: 'Por Ingresar'})}
            startIcon={<BarChart/>}>
            Agregar
        </Button>
    ]


    useEffect(() => {


        contarColeccionWhere({
            coleccion: 'compraAcciones',
            wheres: [where('estado', '==', 'Por Ingresar')]
        }).then((dox) => {
            if (dox.res) {
                setNumCompras(dox.data)
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

            <DialogoIngreso/>

            <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'flex-start'}}>
                <TituloNotificaciones titulo={'Compra Acciones'} textoComplementario={'por ingresar'}
                                      textoResaltado={`${numCompras} Compras`} botones={botones}/>
            </Grid>

            <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'flex-start', marginTop: 5}}>
                <TablaBasica
                    filtros={filtros}
                    datosCabecera={sCell ? datosCabeceraCell : datosCabecera}
                    {...props}
                    click={manejardorClicks}
                    botonesTabla={botonesTabla}
                    numeroFilas={numCompras}
                />
            </Grid>


        </Grid>
    )

}
export default Seccion_Acciones

const filtros = [

    {
        nombre: 'Nombre',
        propiedad: 'nombre',

    },
    {
        nombre: 'Mas Reciente',
        propiedad: 'fecha',
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
        nombre: 'Valor (USD)',
        direccion: 'left',
        propiedad: 'valor',
        tipo: 'moneda'

    },
    {
        nombre: 'Estado',
        direccion: 'right',
        propiedad: 'estado',

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



