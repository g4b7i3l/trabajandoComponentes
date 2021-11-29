import React from "react";
import Filas from "./filas";

let infoPelis = [{titulo: "Billy Eliot", duracion:123, rating: 5, generos:['Drama', 'Comedia'], premios: 2}, {titulo: "Alicia en el pais de las maravillas", duracion:142, rating: 4.8, generos:['Drama','accion', 'Comedia'], premios: 3}]
function Tabla() {
    return (
        <table class="table">
            <tr>
      <th scope="col">Titulo</th>
      <th scope="col">Duracion</th>
      <th scope="col">Rating</th>
      <th scope="col">Generos</th>
      <th scope="col">Premios</th>
    </tr>

           <Filas
           informacion ={infoPelis}/>
        </table>
    )
}

export default Tabla;