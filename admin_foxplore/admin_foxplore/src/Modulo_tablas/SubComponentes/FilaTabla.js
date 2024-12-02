/**************************************************
 * Nombre:       FilaTabla
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Button, Grid, IconButton, TableCell, TableRow, Tooltip, Typography} from "@mui/material";
import {isArray} from "chart.js/helpers";

const FilaTabla = ({botonesTabla, click, row, datosCabecera, getContenido}) => {


    return (
        <TableRow

            sx={{
                '&:last-child td, &:last-child th': {border: 0},
                // '&:nth-of-type(odd)': {backgroundColor: '#f9f9f9'}
            }}
            hover={true}
            onClick={() => botonesTabla.length > -1 ? click(row, '') : ''}
        >
            {datosCabecera.map((datosCabecera, index) => {

                return (
                    <TableCell
                        key={`datw-${index}`}
                        align={datosCabecera.direccion}
                    >


                        {isArray(getContenido(datosCabecera, row)) ?

                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-start"
                            >

                                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'flex-start'}}>
                                    <Typography sx={{fontSize: 10}} >{getContenido(datosCabecera, row)[0]}</Typography>
                                </Grid>

                                <Grid item container lg={12} sm={12} xs={12} sx={{justifyContent: 'flex-start'}}>
                                    <Typography sx={{fontSize: 14}} >{getContenido(datosCabecera, row)[1]}</Typography>
                                </Grid>

                            </Grid>

                            :

                            getContenido(datosCabecera, row)
                        }


                    </TableCell>
                )
            })}

            <TableCell
                align={'right'}
            >

                {botonesTabla.map((item, index) => {
                    return (

                        <IconButton
                            onClick={() => click(row, item.id)}
                        >
                            <Tooltip title={item.nombre}>
                                <item.icono sx={{width: 18, height: 18}}/>
                            </Tooltip>
                        </IconButton>

                    )
                })}

            </TableCell>


        </TableRow>
    )

}
export default FilaTabla