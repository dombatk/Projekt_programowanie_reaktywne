import React from "react";
import Top from "./Top";
import Footer from "./Footer";

const Signin = () => {
    return(
        
    <div>
      <Top/>
      <div className="text-center py-3">
        <form>
            <label>
            Login
            <input type="text" name="login" />
            </label>
            <br/>
            <label>
            Hasło
            <input type="text" name="haslo" />
            </label>
            <br/>
            <input type="submit" value="Zaloguj" />
            
        </form>
        </div>
      <Footer/>
    </div>
    );
}

export default Signin;