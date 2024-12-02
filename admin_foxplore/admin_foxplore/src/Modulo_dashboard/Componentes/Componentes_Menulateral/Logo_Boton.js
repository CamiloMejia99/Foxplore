/**************************************************
 * Nombre:       Logo_Boton
 * Descripcion:
 *
 * Libreria:
 *
 * Tiempo:     1 Hr
 **************************************************/
import {ButtonBase, Grid} from "@mui/material";

import {NavigateBefore, NavigateNext} from "@mui/icons-material";

const Logo_Boton = ({open, setOpen, logoRedondo, logo}) => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
                marginLeft: '5px',
                marginRight: '5px', paddingRight: open ? '25px' : '18px',
            }}

        >

            <Grid item container lg={open ? 10 : 12} sm={10} xs={10}
                  sx={{justifyContent: 'flex-start'}}>
                <img src={open ? logo : logoRedondo} width={open ? 'auto' : '100%'} height={18}/>
            </Grid>

            <Grid item container lg={open ? 2 : 12} sm={2} xs={2}
                  sx={{
                      justifyContent: open ? 'flex-end' : 'center',
                      marginTop: open ? 0 : 2,

                  }}>
                <ButtonBase
                    onClick={() => setOpen(!open)}
                    sx={{borderRadius: 2, marginTop: 0}}>
                    {open ?
                        <NavigateBefore sx={{width: 30, height: 30, fill: '#000'}}/>
                        :
                        <NavigateNext sx={{width: 30, height: 30, fill: '#000'}}/>
                    }
                </ButtonBase>
            </Grid>

        </Grid>
    )

}
export default Logo_Boton