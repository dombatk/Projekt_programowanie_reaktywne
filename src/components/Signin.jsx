import React, { useState } from "react";
import Top from "./Top";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import './style.css'
const Signin = () => {
  const [Name, SetName] = useState("");
  const [Password, SetPassword] = useState("");
  const [error, setError] = useState(false);

  let navigate =  useNavigate();
  const register = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/auth",
      data: { login: Name, password: Password },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(true);
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
              <input type="login" name="login" value={Name} onChange={(e) => SetName(e.target.value)} />
              
              
              <label>
              Hasło
              </label>
              <input type="password" name="password" value={Password} onChange={(e) => SetPassword(e.target.value)}/>
              
              <button className="link-btn" onClick={register}>Zaloguj się</button>
              {error && (
                        <div className="alert alert-danger" role="alert">
                          Nieprawidłowy login lub hasło
                        </div>
                      )}
          </form>
          
        </div>
      </div>
      <Footer/>
    </div>
    );
}

export default Signin;