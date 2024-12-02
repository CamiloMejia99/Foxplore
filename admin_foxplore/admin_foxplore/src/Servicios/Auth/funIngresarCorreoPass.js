import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../fire'

export const funIngresarCorreoPass = (correo, pass) => {
    
    return new Promise(resolve => {

        if (correo === undefined || pass === undefined) {
            alert("Correo y contraseña son requeridos para esta accion")
            return resolve({res: false, data: null});
        }

        signInWithEmailAndPassword(auth, correo, pass).then((user) => {
            return resolve({res: true, data: user});
        }).catch((err) => {
            return resolve({res: false, data: err});
        })
    })


}