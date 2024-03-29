import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Inicio } from "./Inicio";
import { Menu } from "./Menu";
import { Productos } from "./Productos";

export function Rutas(){
    return(
        <>
        <Menu></Menu>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Error />}></Route>
                    <Route path="/" element={<Inicio />}></Route>
                    <Route path="/Productos" element={<Productos />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}