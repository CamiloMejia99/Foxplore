/**************************************************
 * Nombre:       FilaTabla
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Button, Collapse, Grid, TableCell, TableRow} from "@mui/material";
import {useState} from "react";

const FilaTablaCell = ({botonesTabla, click, row, datosCabecera, getContenido}) => {
    const [open, setOpen] = useState(false)



    return (
        <>
            <TableRow sx={{'& > *': {borderBottom: 0}}}
                      hover={true}
            >
                {datosCabecera.map((datosCabecera, index) => {

                    return (
                        <TableCell
                            key={`datw-${index}`}
                            align={datosCabecera.direccion}
                            onClick={() => setOpen(!open)}
                        >

                            {getContenido(datosCabecera, row)}


                        </TableCell>
                    )
                })}


            </TableRow>

            <TableRow>
                <TableCell style={{paddingBottom: open ? 10 : 0, paddingTop: 0}} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit sx={{width: '100%'}}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="flex-start"
                        >

                            {botonesTabla.map((item, index) => {
                                return (

                                    <Button
                                        onClick={() => click(row, item.id)}
                                        startIcon={<item.icono/>} sx={{
                                        mt: 1, mr: 1, fontSize: 12
                                    }}>
                                        {item.nombre}
                                    </Button>

                                )
                            })}

                        </Grid>
                    </Collapse>

                </TableCell>
            </TableRow>

        </>

    )

}
export default FilaTablaCell