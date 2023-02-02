import React from "react";
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { isExpired, decodeToken } from "react-jwt";
const Top = () => {
    
    let navigate = useNavigate();

    const logOut = () => {
        const token = decodeToken(localStorage.getItem("token"));

        axios({
        method: "delete",
        url: `https://at.usermd.net/api/user/logout/${token.userId}`,
        data: { userId: token.userId },
        })
        .then((response) => {
            localStorage.removeItem("token");
            navigate("/");
        })
        .catch((error) => console.log(error));
    };

    const isNotLog = isExpired(localStorage.getItem("token"));
    
    return(
        <div className='top'> 
            
            <div className="prawo">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                   <Link to="/" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true">Strona główna</Link>
               </li>
               {isNotLog && (
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
               <li className="nav-item" role="presentation">
                   <Link to="/signin" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true">Zaloguj się</Link>
               </li>
               <li>
                   <Link to="/signup" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true">Rejestracja</Link>
               </li>
               </ul>
               )}
               {!isNotLog &&(
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
               <li className="nav-item" role="presentation">
                   <Link to="/add" className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true">Dodaj film</Link>
                </li>
                <li>         
                    <Link onClick={logOut} className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                         aria-controls="pills-home" aria-selected="true">Wyloguj</Link>
               </li>
               </ul>
               )}
           

           
            </ul>
            </div>
        </div>
    )
}

export default Top;