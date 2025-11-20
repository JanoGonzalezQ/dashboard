import React from "react";
import NavBarPrincipal from "./components/navbar";
import SideMenuPrincipal from "./components/sidemenu";
import ListaUsuarios from "./components/lista_usuarios";

function ListadoUsuarios() {
    return (
        <div>
        <NavBarPrincipal/>
        <SideMenuPrincipal/>
        <ListaUsuarios/>
        
        </div>

    );
}

export default ListadoUsuarios;