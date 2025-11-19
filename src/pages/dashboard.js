import React from "react";
import NavBarPrincipal from "./components/navbar";
import SideMenuPrincipal from "./components/sidemenu";
import Kpis from "./components/kpis";

function Dahboard(){
    return (

        <div>
            <NavBarPrincipal/>
            <SideMenuPrincipal/>
            <Kpis/>
        </div>
    );
}

export default Dahboard