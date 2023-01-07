import logo from './logo-social.png';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Movies = () =>{
   return(
   <div className='text-center'>
      <CardGroup>
         
         <Card style={{ width: '18rem' }}>
            <Link to="/details">
               <Card.Img variant='top' src={logo} height="100"/>
            </Link>
            <Card.Body>
               <Card.Title>
                  Tytuł filmu
               </Card.Title>
               <Card.Text>
                  Opis filmu
               </Card.Text>
            </Card.Body>
         </Card>
         
         <Card style={{ width: '18rem' }}>
            <Link to="/details">
               <Card.Img variant='top' src={logo} height="100"/>
            </Link>
            <Card.Body>
               <Card.Title>
                  Tytuł filmu
               </Card.Title>
               <Card.Text>
                  Opis filmu
               </Card.Text>
            </Card.Body>
         </Card>
         <Card style={{ width: '18rem' }}>
            <Link to="/details">
               <Card.Img variant='top' src={logo} height="100"/>
            </Link>
            <Card.Body>
               <Card.Title>
                  Tytuł filmu
               </Card.Title>
               <Card.Text>
                  Opis filmu
               </Card.Text>
            </Card.Body>
         </Card>
         </CardGroup>
         
         
         <CardGroup>
         <Card style={{ width: '18rem' }}>
            <Link to="/details">
               <Card.Img variant='top' src={logo} height="100"/>
            </Link>
            <Card.Body>
               <Card.Title>
                  Tytuł filmu
               </Card.Title>
               <Card.Text>
                  Opis filmu
               </Card.Text>
            </Card.Body>
         </Card>
         <Card style={{ width: '18rem' }}>
            <Link to="/details">
               <Card.Img variant='top' src={logo} height="100"/>
            </Link>
            <Card.Body>
               <Card.Title>
                  Tytuł filmu
               </Card.Title>
               <Card.Text>
                  Opis filmu
               </Card.Text>
            </Card.Body>
         </Card>
         <Card style={{ width: '18rem' }}>
            <Link to="/details">
               <Card.Img variant='top' src={logo} height="100"/>
            </Link>
            <Card.Body>
               <Card.Title>
                  Tytuł filmu
               </Card.Title>
               <Card.Text>
                  Opis filmu
               </Card.Text>
            </Card.Body>
         </Card>
      </CardGroup>
    </div>
   )
}

export default Movies;