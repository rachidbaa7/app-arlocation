import React, { useContext } from "react";

import { UidContext } from "../components/AppContext";
import UpdateActualiser from "../components/Map/UpdateActualiser ";

const Actualiser = () => {
    const uid = useContext(UidContext);

    return ( < div className = "actualiser-page" > {

            < UpdateActualiser / >



        } </div>
    );
};
export default Actualiser;