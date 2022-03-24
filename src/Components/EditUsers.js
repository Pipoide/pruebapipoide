import React, { useState } from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import NewUsers from './NewUsers';

const EditUsers = (props) => {


    /* Creo un state en el componente nuevo que va a funcionar como componente
    propio unicamente para cada elemento de la lista. Va a tener un estado
    para cada elemento. */
    const [estado, setEstado] = useState(false);
    const [newUser, setNewUser] = useState("") 

    /* Crea una constante que edita el state de estado */
    const editUser = (i) => {
        setEstado(!estado);
      };
    
    const edited = (i) => {
        console.log("NO SE COMO SEGUIR")
    }

    const handler = (e) => {
        setNewUser(e.target.value)
    }

    return(
        <div>
            <Button variant="contained" onClick={() => editUser()}>
                Editar
            </Button>
            {estado ? (
                <>
                    <TextField
                        id="standard-basic"
                        label="Standard"
                        variant="standard"
                        value={newUser}
                        onChange={handler}
                    />
                    <Button variant="contained" color="success" onClick={edited}>
                        Modificar
                    </Button>
                </>
            ) : null}
          </div>
    )
}

/* Con splice va a tener que modificar el elemento del array.
    Usar el onClick y onChange para el textfield.*/

export default EditUsers