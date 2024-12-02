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
import {CampaignOutlined, Edit, ManageSearch} from "@mui/icons-material";
import {contarColeccion} from "../../Servicios/BD/Contadores/contarColeccion";
import Dialogo_Deposito from "../Dialogos/Dialogo_Deposito";
import {contarColeccionWhere} from "../../Servicios/BD/Contadores/contarColeccionWhere";
import {where} from "firebase/firestore";

const Seccion_Depositos = () => {
    const sCell = useMediaQuery(theme.breakpoints.only('xs'))
    const [numAnuncios, setNumAnuncios] = useState(0)
    const [recargar, setRecargar] = useState(false)
    const {props, cargarNuevamente} = useObtenerColleccionTabla({
        coleccion: 'depositos',
        filtroInicial: 'fecha',
        dirInicial: 'desc'
    })
    const {Dialogo, abrir} = useDialogo({
        Componente: Dialogo_Deposito,
        realizado: () => setRecargar(!recargar),
        titulo: 'Detalle de Deposito',
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


        contarColeccionWhere({coleccion: 'depositos', wheres: [where('estado', '==', 'Pendiente')]}).then((dox) => {
            if (dox.res) {
                setNumAnuncios(dox.data)
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
                <TituloNotificaciones titulo={'Depositos'} textoComplementario={'Pendietes'}
                                      textoResaltado={`${numAnuncios} Depositos`} botones={botones}/>
            </Grid>

            <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'flex-start', marginTop: 5}}>
                <TablaBasica
                    filtros={filtros}
                    datosCabecera={sCell ? datosCabeceraCell : datosCabecera}
                    {...props}
                    click={manejardorClicks}
                    botonesTabla={botonesTabla}
                    numeroFilas={numAnuncios}
                />
            </Grid>


        </Grid>
    )

}
export default Seccion_Depositos

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
        nombre: 'Token',
        direccion: 'left',
        propiedad: 'tipo',

    },
    {
        nombre: 'Valor (USD)',
        direccion: 'left',
        propiedad: 'valor',
        dipo:'moneda'

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



