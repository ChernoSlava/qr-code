import React from "react"
import code from './code.module.css';
import img from './img/image-qr-code.png'
export const Code = () => {
    return (
        <div className={code.container}>  
            <img className={code.img} src={img} alt="qrcode"/>
            <div className={code.subcontainer}>
                <h2 className={code.title}>Improve your front-end skills by building projects</h2>
                <h3 className={code.subtitle}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h3>

                <div className={code.attribution}>
                    <p>Challenge by <a className={code.link} href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.</p>
                    <p>Coded by <a className={code.link} href="https://github.com/ChernoSlava">ChernoSlava</a>.</p>
                </div>
            </div>
        </div>
    );
}