import React, { useState } from "react";
import EditUsers from './EditUsers';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const NewUsers = () => {
  const [list, setList] = useState([]);

  const [user, setUser] = useState("");

  const handler = (e) => {
    setUser(e.target.value);
  };

  const addUser = () => {
    /* Crea una arrow function que adentro tiene una variable
    temporal que guarda la lista. */
    let copy = [...list];
    /* En la variable temporal pusheamos el user (el valor del input que creamos) */
    copy.push(user);
    /* setea List con el temporalList */
    setList(copy);
    console.log(list);
  };

  const cleanUsser = () => {
    setUser("");
  };

  const deleteUser = (i) => {
    let copy = [...list];
    copy.splice(i, 1);
    setList(copy);
  };

  return (
    <div>
      <h3>Agregar cliente:</h3>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        onChange={handler}
        value={user}
      />
      <Button variant="contained" color="success" onClick={addUser}>
        Agregar
      </Button>
      <Button variant="outlined" color="error" onClick={cleanUsser}>
        Cancelar
      </Button>
      <h3>Clientes:</h3>
      {list.map((l, i) => (
        <li key={i}>
          {l}
          <Button variant="contained" onClick={() => deleteUser(i)}>
            Delete
          </Button>
          <EditUsers/>
          <br/>
        </li>
      ))}
    </div>
  );
};

export default NewUsers;
