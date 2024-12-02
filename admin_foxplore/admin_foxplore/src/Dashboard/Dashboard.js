/**************************************************
 * Nombre:       Dashboard
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Grid} from "@mui/material";
import DashboardBase from "../Modulo_dashboard/Componentes/DashboardBase";
import MenuLateral from "../Modulo_dashboard/Componentes/MenuLateral";
import {
    AccountCircle, BarChart,
    CampaignOutlined, CurrencyBitcoin,
    DashboardOutlined,
    Layers,
    LocalOffer, MoveToInbox,
    Newspaper,
    RequestQuote,
    ShoppingCart
} from "@mui/icons-material";
import logo from '../Recursos/logo_oscuro.svg'
import logo_redondo from '../Recursos/logo_oscuro.svg'
import logo_blanco from '../Recursos/logo_blanco.svg'
import {useContext, useEffect} from "react";
import {usuarioContext} from "../App";
import {funSalir} from "../Servicios/Auth/funSalir";
import {actualizarDoc} from "../Servicios/BD/actualizarDoc";
import Seccion_Depositos from "./Secciones/Seccion_Depositos";
import Seccion_Usuarios from "./Secciones/Seccion_Usuarios";
import Seccion_Acciones from "./Secciones/Seccion_Acciones";


const Dashboard = () => {
    const cData = useContext(usuarioContext)


    const irPerfil = () => {
        // alert('ir Perfil')
    }



    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >



            <DashboardBase secciones={secciones}
                           credenciales={['Depositos','Usuarios', 'Acciones']}>
                <MenuLateral logo={logo} clickPerfil={irPerfil} logoRedondo={logo_redondo} logoBlanco={logo_blanco}
                             usuario={cData.usuario} salir={funSalir}/>
            </DashboardBase>


        </Grid>
    )

}
export default Dashboard

const secciones = [
    {
        nombre: 'Depositos',
        Componente: <Seccion_Depositos/>,
        icono: MoveToInbox,
        categoria: 'propia',
        camino: '/',
    },
    {
        nombre: 'Usuarios',
        Componente: <Seccion_Usuarios/>,
        icono: AccountCircle,
        categoria: 'Listas',
        camino: '/Usuarios',
    },
    {
        nombre: 'Acciones',
        Componente: <Seccion_Acciones/>,
        icono: BarChart,
        categoria: 'Listas',
        camino: '/Acciones',
    },
]