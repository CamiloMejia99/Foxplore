/**************************************************
 * Nombre:       Barra_Celular
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {Button, ButtonBase, Grid} from "@mui/material";
import {Menu, MenuOpen} from "@mui/icons-material";
import {theme} from "../../../Tema";

const Barra_Celular = ({setOpen, logo}) => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
                justifyContent: 'flex-start',
                backgroundColor: theme.palette.primary.main,
                height: 70,
                borderRadius: 2,
                boxShadow: 2,
                px: 2
            }}
        >

            <Grid item container lg={2} sm={2} xs={2}>
                <ButtonBase
                    onClick={() => setOpen(true)}
                    sx={{p: 1, borderRadius: 2}}>
                    <Menu sx={{width: 30, height: 30}}/>
                </ButtonBase>
            </Grid>

            <Grid item container lg={8} sm={10} xs={10} sx={{justifyContent: 'flex-end'}}>
                <img src={logo} height={24} width={'auto'}/>
            </Grid>

        </Grid>
    )

}
export default Barra_Celular