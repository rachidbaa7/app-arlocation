import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext";
import UpdateMap from "../components/Map/UpdateMap";


const Map = () => {
    const uid = useContext(UidContext);

    return ( < div className = "map-page" >
        <iframe width="590" height="510" id="gmap_canvas" src="https://maps.google.com/maps?q=&t=&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> {

            <
            UpdateMap / >

        } <
        /div>
    );
};
export default Map;