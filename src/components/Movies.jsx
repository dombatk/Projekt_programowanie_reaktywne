import logo from './logo-social.png';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';


const Movies = () =>{
   return(
   <div className='text-center'>
      <CardGroup>
         <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={logo} height="100"/>
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
            <Card.Img variant='top' src={logo} height="100" />
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
            <Card.Img variant='top' src={logo} height="100" />
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
            <Card.Img variant='top' src={logo} height="100"/>
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
            <Card.Img variant='top' src={logo} height="100" />
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
            <Card.Img variant='top' src={logo} height="100" />
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