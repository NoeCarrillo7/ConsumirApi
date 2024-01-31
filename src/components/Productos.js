import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export function Productos(){
    const[dataProductos, setDataProductos] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/productos/api/mostrarProductos")
        .then((respuesta)=>{
            console.log(respuesta);
            setDataProductos(respuesta.data);
        })
        .catch((err)=>{
            console.log("Error al recuperar producto" + err);
        })

    },[]);

    const listaProductos = dataProductos.map((producto)=>{
        var editar = "/editar/" + producto.id;
        var borrar = "/borrar/" + producto.id;
        var foto = "http://localhost:3000/images/" + producto.foto;
        return(
            <tr className="align-middle">
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td><img src={foto} alt="img" width="100px"/></td>
                <td>
                    <Link to = {editar}>Editar</Link>
                    <Link to = {borrar}>Borrar</Link>
                </td>

            </tr>
        );
    })

    return(
        <table className="table table-over">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Foto</th>
            </tr>
            </thead>
            <tbody>
                {listaProductos}
            </tbody>
        </table>
    )
}