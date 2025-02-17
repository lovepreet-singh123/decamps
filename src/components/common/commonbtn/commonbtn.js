import React from 'react';
import "../../../styles/common/commonbtn/commonbtn.scss";
import { RightArrow } from "../../../../public/assets/icons/icons";

const Commonbtn = (props) => {
    return (
        <>
            <button className={`common_btn ${props.className || ""}`}>
                <p>{props.text}</p>
                <span><RightArrow /></span>
            </button>
        </>
    );
};

export default Commonbtn;