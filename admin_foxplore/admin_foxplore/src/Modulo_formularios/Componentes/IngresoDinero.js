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
import {NumericFormat} from "react-number-format";
import {forwardRef} from "react";
import {Controller} from 'react-hook-form'


const IngresoDinero = ({
                           props,
                           nombre,
                           dato,
                           Icono = Brightness1,
                           size = 'small',
                           editable = true
                       }) => {
    const {register, errors, control} = props


    const TextMui = ({...props}) => {

        return (
            <TextField
                {...props}
                InputProps={{
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
            />
        )
    }


    return (
        <Controller
            control={control}
            name={dato}
            defaultValue={0}
            render={({field: {onChange, onBlur, value, ref, name}}) => (
                <NumericFormat
                    defaultValue={0}
                    customInput={TextMui}
                    thousandSeparator={true}
                    prefix={"$ "}
                    value={value}
                    onValueChange={values => {
                        const {floatValue} = values;
                        onChange({
                            target: {
                                name: name,
                                value: floatValue
                            }
                        });
                    }}


                />
            )}
            size={size}
        />


    )

}
export default IngresoDinero