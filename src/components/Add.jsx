import React from "react";
import Top from "./Top";
import Footer from "./Footer";

const Add = () => {
    return(
        
    <div>
      <Top/>
        <div className="text-center py-3">
        <form>
            <label>
            Tytuł filmu: 
            <input type="text" name="tytul" />
            </label>
            <br/>
            <label>
            Reżyser: 
            <input type="text" name="rezyser" />
            </label>
            <br/>
            Dodaj logo filmu: 
            <input type="file" name="logo" />
            <br/>
            <input type="submit" value="Dodaj film" />
            
        </form>
        </div>
      <Footer/>
    </div>
    );
}

export default Add;