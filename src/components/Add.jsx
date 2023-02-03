import React, { useState } from "react";
import Top from "./Top";
import Footer from "./Footer";
import axios from 'axios';
const Add = () => {
  const [movieData, setMovieData] = useState({
    id: "",
    title: "",
    image: "",
    content: ""
  });
  const[successMessage, setSuccessMessage] = useState('');
  const[errorMessage, setErrorMessage] = useState('');


  const handleChange = e => {
    setMovieData({...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('https://at.usermd.net/api/movies', movieData)
      .then(res => {
        setSuccessMessage("Dodano film")
      })
      .catch(err => {
        setErrorMessage("Wystąpił błąd");
      });
    };
  
  
  return(
        
    <div className="srodek">
      <Top/>
        <div className="App">
          <div className="formm">
        <form className="formularz" onSubmit={handleSubmit}>
            <label>
            Tytuł filmu:
            </label> 
            <input type="text" name="title" value={movieData.title} onChange={handleChange} required />
            
            
        

            <label>
            Opis: 
            </label>
            <textarea name="content" value={movieData.content} onChange={handleChange} required />

            <label>
            Dodaj link do loga:
            </label> 
            <input type="text" name="image" className="title" value={movieData.image} onChange={handleChange} required/>
            
            <button className="link-btn">Dodaj film</button>
            {successMessage && (
                          <div className="alert alert-success" role="alert">
                           {successMessage}

                          </div>
                        )}
                        {errorMessage && (
                          <div className="alert alert-danger" role="alert">
                            {errorMessage}
                          </div>
                        )}
        </form>
        </div>
        </div>
      <Footer/>
    </div>
    );
}

export default Add;