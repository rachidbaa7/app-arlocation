import React from "react";
import LeftNav from "../LeftNav";
import { useSelector } from "react-redux";


const UpdateMap = () => {
    const userData = useSelector((state) => state.userReducer);


    return (

        <
        div class = "map-page" >



        <
        LeftNav / >
        <
        center >
        <
        li className = "ahlam" > < /li> <
        h1 > Bienvenue { userData.pseudo } < /h1> <
        br / >
        <
        h2 > sur Google Maps < /h2>

        <
        /center>


        <
        /div>
    );
};

export default UpdateMap;