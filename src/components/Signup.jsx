import React from "react";
import Top from "./Top";
import Footer from "./Footer";

const Signup = () => {
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
            Nazwa
            <input type="text" name="nazwa" />
            </label>
            <br/>
            <label>
            Email
            <input type="text" name="email" />
            </label>
            <br/>
            <label>
            Haslo
            <input type="text" name="haslo" />
            </label>
            <br/>
            <input type="submit" value="Zarejestruj" />
            
        </form>
        </div>
      <Footer/>
    </div>
    );
}

export default Signup;