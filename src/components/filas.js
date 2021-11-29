import React from "react";

function Filas(props) {
    return (
        <tbody>
     {props.informacion.map((informacion,i)=>
       
        <tr key={informacion + i}>
          <td>{informacion.titulo}</td>
          <td>{informacion.duracion}</td>
          <td>{informacion.rating}</td>
          <td><ul>{informacion.generos.map((generos,i)=> <li key={generos + i}> {generos}</li>)}</ul></td>
          <td>{informacion.premios}</td>
        </tr>
        
     
        )}
 </tbody>
    )
}
export default Filas;