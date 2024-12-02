/**************************************************
 * Nombre:       IngresoTexto
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Grid, InputAdornment, TextField} from "@mui/material";
import {Brightness1} from "@mui/icons-material";


const IngresoTexto = ({
                          props,
                          nombre,
                          dato,
                          lineas = 1,
                          Icono = Brightness1,
                          requerido = false,
                          size = 'small',
                          type = 'text',
                          editable = true
                      }) => {
    const {register, errors} = props

    return (
        <TextField
            InputProps={lineas > 1 ? {disableUnderline: true} : {
                startAdornment: (
                    <InputAdornment position="start">
                        <Icono color={'primary'}/>
                    </InputAdornment>
                ),
                disableUnderline: true

            }}

            disabled={!editable}
            fullWidth
            size={size}
            label={nombre}
            multiline={lineas > 1} rows={lineas}
            type={type}
            {...register(dato, {required: requerido})}
            error={!!errors[dato]}
            helperText={errors[dato]?.message}
            InputLabelProps={{
                shrink: true
            }}
        />
    )

}
export default IngresoTexto