/**************************************************
 * Nombre:       MainDashboard
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Grid} from "@mui/material";
import {Route, Routes} from "react-router-dom";

const MainDashboard = ({open, masSM, secciones, seccionesID, credenciales}) => {

    const getMargen = () => {
        if (masSM) {
            return open ? 40 : 12
        } else {
            return 0
        }
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            sx={{
                maxHeight: '100vh',
                ml: getMargen(),
                transition: "all .4s ease-in-out",
                pl: masSM ? 4 : 2,
                pr: masSM ? 4 : 2,
                pt: masSM ? 6 : 4,
            }}
        >

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                sx={{maxWidth: '1200px'}}
            >

                <Routes>
                    {/* eslint-disable-next-line array-callback-return */}
                    {secciones.map((it, index) => {

                        if (credenciales.findIndex((e) => e === it.nombre) > -1) {
                            return (
                                <Route key={`cam-${index}`} path={it.camino} element={it.Componente}/>
                            )
                        }


                    })}

                    {/* eslint-disable-next-line array-callback-return */}
                    {seccionesID.map((it, index) => {

                        if (credenciales.findIndex((e) => e === it.nombre) > -1) {
                            return (
                                <Route key={`camid-${index}`} path={it.camino} element={it.Componente}/>
                            )
                        }

                    })}

                </Routes>

            </Grid>


        </Grid>
    )

}
export default MainDashboard