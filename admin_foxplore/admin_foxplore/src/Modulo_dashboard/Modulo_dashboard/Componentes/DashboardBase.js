/**************************************************
 * Nombre:       DashboardBase
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Grid} from "@mui/material";
import {cloneElement, isValidElement, useState} from "react";
import {BrowserRouter} from "react-router-dom";

const DashboardBase = ({children, secciones = [], seccionesID=[]}) => {
    const anchoDrawer = '320px'


    const MenuDrawer = () => {

        let menusOrdenados = []

        for (let i = 0; i < secciones.length; i++) {

            let seccion = secciones[i]

            let itemIndex = menusOrdenados.findIndex((e) => e.categoria === seccion.categoria)

            if (itemIndex > -1) {
                menusOrdenados[itemIndex].items.push(seccion)
            } else {
                menusOrdenados.push({categoria: seccion.categoria, items: [seccion]})
            }

        }


        if (isValidElement(children)) {
            return cloneElement(children, {menusOrdenados, anchoDrawer, secciones, seccionesID});
        }
        return children;
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{p: 2}}
        >
            <BrowserRouter>
                <MenuDrawer/>
            </BrowserRouter>

        </Grid>
    )

}
export default DashboardBase