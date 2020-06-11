import React from "react";
import preLouder from "../../../assets/images/preLouder.svg";

type PropsType = {}

function PreLoader(props: PropsType) {
    return (
        <>
            <img src={preLouder}/>
        </>
    )
}

export default PreLoader