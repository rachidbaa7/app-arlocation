import React from "react";
import LeftNav from "../LeftNav";
import { useSelector } from "react-redux";

const UpdateActualiser = () => {
    const userData = useSelector((state) => state.userReducer);


    return ( <
        div className = "actualiser-container" >


        <
        /div>
    );
};

export default UpdateActualiser;