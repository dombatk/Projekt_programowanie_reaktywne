import React from 'react';
import './style.css'
import logo from './logo-social.png';
import { Link } from 'react-router-dom';
const Top = () => {
    return(
        <div className='top'> 
            <img src={logo} alt='logo' height={30} width={80} />
            <div className="prawo">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                   <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true">Stron główna</Link>
               </li>
               <li className="nav-item" role="presentation">
                   <Link to="/signup" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true">Zaloguj się</Link>
               </li>
               <li className="nav-item" role="presentation">
                   <Link to="/signin" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true">Rejestracja</Link>
               </li>
               <li className="nav-item" role="presentation">
                   <Link to="/add" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true">Dodaj film</Link>
               </li>
           </ul>

            <input type="text" placeholder="Search here" />
            </div>
        </div>
    )
}

export default Top;