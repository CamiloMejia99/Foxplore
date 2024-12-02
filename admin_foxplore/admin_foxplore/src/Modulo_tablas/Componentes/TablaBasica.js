/**************************************************
 * Nombre:       TablaSencilla
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {
    Grid,
    InputAdornment,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Toolbar,
    useMediaQuery
} from "@mui/material";
import {FilterList, Flag} from "@mui/icons-material";
import {theme} from "../../Tema";
import {formatoFecha} from "../Utilidades/formatoFecha";
import {formatoMoneda} from "../Utilidades/formatoMoneda";
import FilaTabla from "../SubComponentes/FilaTabla";
import FilaTablaCell from "../SubComponentes/FilaTablaCell";

const TablaBasica = ({
                         filtros = [],
                         data,
                         numeroFilas,
                         filasPagina,
                         filtroEscogido,
                         setFiltroEscogido,
                         datosCabecera = [],
                         cambiarPagina,
                         page,
                         filasPaginaCambia,
                         click,
                         funcionFecha = formatoFecha,
                         nombreEstado,
                         estados = [],
                         estado,
                         setEstado,
                         botonesTabla = []
                     }) => {
    const sCell = useMediaQuery(theme.breakpoints.only('xs'))
    const masSM = useMediaQuery(theme.breakpoints.up('md'))


    const getContenido = (datosCabecera, row) => {

        if (datosCabecera.tipo === 'fecha') {
            return funcionFecha(row[datosCabecera.propiedad])
        }

        if (datosCabecera.tipo === 'moneda') {
            return formatoMoneda(row[datosCabecera.propiedad])
        }

        if (datosCabecera.tipo === 'contararray') {

            return row[datosCabecera.propiedad] && row[datosCabecera.propiedad].length ? row[datosCabecera.propiedad].length : 0
        }

        if (datosCabecera.tipo === 'fechaDato') {
            return [funcionFecha(row.fecha), row[datosCabecera.propiedad]]
        }


        return row[datosCabecera.propiedad]

    }

    const procesarFiltro = (e) => {

        let index = filtros.findIndex((fil) => fil.propiedad === e)
        let filtro = filtros[index]
        let dir = filtro.direccion ? filtro.direccion : 'asc'

        setFiltroEscogido({propiedad: e, direccion: dir})
    }


    return (
        <TableContainer component={Paper} sx={{boxShadow: 0, maxHeight: sCell ? 500 : "80vh"}}>
            <Toolbar
                sx={{
                    pl: {xs: 0, sm: 2},
                    pr: {xs: 0, sm: 1},
                    marginTop: {xs: 1}
                }}
            >

                <Grid
                    container
                    direction="row"
                    justifyContent={"space-between"}
                    alignItems="center"

                >


                    <TextField
                        select
                        InputProps={{
                            startAdornment:
                                <InputAdornment position={"start"}>
                                    <FilterList/>
                                </InputAdornment>,
                            disableUnderline: true,
                            style: {fontSize: 14}

                        }}
                        label={'Filtro'}
                        size={'small'}
                        value={filtroEscogido.propiedad}
                        onChange={(e) => procesarFiltro(e.target.value)}
                        sx={{width: sCell ? 160 : 200}}>


                        {filtros.map((it, index) => {
                            return (
                                <MenuItem key={`men-${index}`} value={it.propiedad} sx={{fontSize: 14}}>
                                    {it.nombre}
                                </MenuItem>
                            )
                        })}

                    </TextField>

                    {estados.length > 0 &&
                        <TextField
                            select
                            InputProps={{
                                startAdornment:
                                    <InputAdornment position={"start"}>
                                        <Flag/>
                                    </InputAdornment>,
                                disableUnderline: true,
                                style: {fontSize: 14}

                            }}
                            label={nombreEstado.charAt(0).toUpperCase() + nombreEstado.slice(1)}
                            size={'small'}
                            value={estado}
                            defaultValue={'Todo'}
                            onChange={(e) => setEstado(e.target.value)}
                            sx={{width: sCell ? 160 : 200, marginLeft: masSM ? '-17%' : 0}}>

                            <MenuItem value={'Todo'} sx={{fontSize: 14}}>
                                {'Todo'}
                            </MenuItem>

                            {estados.map((it, index) => {
                                return (
                                    <MenuItem key={`es-${index}`} value={it} sx={{fontSize: 14}}>
                                        {it}
                                    </MenuItem>
                                )
                            })}

                        </TextField>
                    }


                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        component="div"
                        count={numeroFilas}
                        rowsPerPage={filasPagina}
                        page={page}
                        onPageChange={cambiarPagina}
                        onRowsPerPageChange={filasPaginaCambia}
                        labelRowsPerPage={'Filas'}
                        sx={{mx: sCell ? -1 : 0}}
                    />


                </Grid>


            </Toolbar>
            <Table aria-label="simple table"
                   stickyHeader
            >
                <TableHead>
                    <TableRow>
                        {datosCabecera.map((it, index) => {

                            return (
                                <TableCell key={`tc-${index}`} align={it.direccion}>{it.nombre}</TableCell>
                            )
                        })}

                        {!sCell &&
                            <TableCell align={'right'}>Botones</TableCell>
                        }

                    </TableRow>
                </TableHead>
                <TableBody sx={{minHeight: 50}}>
                    {data.map((row, index) => {

                        if (sCell) {
                            return (
                                <FilaTablaCell botonesTabla={botonesTabla} click={click} datosCabecera={datosCabecera}
                                               getContenido={getContenido} row={row}/>
                            )
                        } else {
                            return (

                                <FilaTabla botonesTabla={botonesTabla} click={click} datosCabecera={datosCabecera}
                                           getContenido={getContenido} row={row}/>
                            )
                        }


                    })}

                </TableBody>
            </Table>


        </TableContainer>

    )

}
export default TablaBasica

