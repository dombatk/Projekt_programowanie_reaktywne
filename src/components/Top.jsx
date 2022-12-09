import React from 'react';
import './style.css'
import logo from './logo-social.png';
const Top = () => {
    return(
        <div className='top'> 
            <img src={logo} alt='logo' height={30} width={80} />
            <div className="prawo">
            <input type="text" placeholder="Search here" />
            </div>
        </div>
    )
}

export default Top;