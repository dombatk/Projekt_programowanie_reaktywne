import React, { useState, useEffect } from "react";
import Top from "./Top";
import Footer from "./Footer";
import { Card } from 'react-bootstrap';
import './style.css'
import axios from "axios";
import { useParams } from "react-router-dom";





const Details = () => {
    
    const { id } = useParams();
    const getMoviesData = () => {
      axios({
        method: "get",
        url: `https://at.usermd.net/api/movies/${id}`,
      })
        .then((response) => setMovies(response.data))
        .catch((error) => console.log(error));
    };
  
    const [Movies, setMovies] = useState({});
    useEffect(() => {
      getMoviesData();
    }, []);

    
    return(
        <div className="srodek">
            <Top/>
            <div >
            <div className="card">
                
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={Movies.image} />
                    <Card.Body>
                        <Card.Title>{Movies.title}</Card.Title>
                        <Card.Text>
                          {Movies.content}
                        </Card.Text>
                    </Card.Body>
                    
                    
                </Card>
            </div>
            </div>
            <Footer/>
        </div>
    )
}






export default Details;