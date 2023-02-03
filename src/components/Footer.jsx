import React from "react";
import './style.css'

const Footer = () => {
    return(
        <div className="main-footer stopka" style={{position: 'fixed', bottom: 0, width: '100%'}}>
            <div className="text-center py-3">
            {new Date().getFullYear()} Dominik Batko
            </div>
        </div>
    )
}

export default Footer;