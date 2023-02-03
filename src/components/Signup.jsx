import React, { useState } from "react";
import Top from "./Top";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Signup = () => {
  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState("");
  const [Email, SetEmail] = useState("");
  const [isSuccess, setSuccess] = useState(null);
  const [message, setMessage] = useState("");

  let navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/create",
      data: { name: Name, email: Email, password: Password },
    })
      .then((response) => navigate("/"))
      .catch((error) => {
        setSuccess(false);
        setMessage("Wystąpił błąd");
        });
        };
  
  
  return(
        
    <div className="srodek">
      <Top/>
      <div className="App">
        <div className="formm">
          <form className="formularz">
              <label>
              Login
              </label>
              <input type="login" value={Name} onChange={(e) => SetName(e.target.value)} required />
              

              
              <label>
              Email
              </label>
              <input type="text" valule={Email} onChange={(e) => SetEmail(e.target.value)} required/>
              
              
              <label>
              Hasło
              </label>
              <input type="password" value={Password} onChange={(e) => SetPassword(e.target.value)} required />
            
              
              <button className="link-btn" onClick={register}>Zarejestruj</button>
              {isSuccess === false && <div className="alert alert-danger">{message}</div>}
          </form>
        </div>
      </div>
      <Footer/>
    </div>
    );
}

export default Signup;