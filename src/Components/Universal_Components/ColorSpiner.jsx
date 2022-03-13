import React, { useContext, useState } from 'react';
import CpntextApi from '../../Image/ContextApi/MyContext';

const ColorSpiner = () => {
    const [active, setActive]=useState();
    const locale = useContext(CpntextApi);
    console.log(locale);

    const hendelClick = ()=>{
        setActive(!active)
        console.log("Click");
    }
    return (
        <>
            <div className="colorSpiner">
                <div className="wrap">
                   <div className="myWrap">
                   <div className="block IndianRed" onClick={hendelClick}></div>
                    <div className="block HotPink"></div>
                    <div className="block Tomato"></div>
                    <div className="block Magenta"></div>
                    <div className="block green"></div>
                   </div>
                    <h3>Pick a Color Here</h3>
                </div>
            </div>
        </>
    );
};

export default ColorSpiner;