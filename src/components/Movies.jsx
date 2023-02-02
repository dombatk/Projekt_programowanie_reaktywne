import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';

 
 class Movies extends Component{
   state = {
      items: []
    }
    componentDidMount() {
      axios.get('https://at.usermd.net/api/movies/')
        .then(response => {
          const items = response.data;
          this.setState({ items });
        })
        .catch(error => {
          console.log(error);
        });
    }
    render() {
      return(
         
         <div className='srodek'>
            
            {this.state.items.map(item => {
            return (
               <div key={item.id} className='card'>
               <Card style={{ width: '18rem' }}>
                  <Link to={`/details/${item.id}`}>
                     <Card.Img variant='top' src={item.image} height="300"/>
                  </Link>
                  <Card.Body>
                  <Card.Title>
                     {item.title}
                     
                  </Card.Title>
                  
                  </Card.Body>
               </Card>
               </div>
            )
            })}
         </div>
      )
    }
   }







export default Movies;