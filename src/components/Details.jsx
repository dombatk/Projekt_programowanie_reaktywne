import React from "react";
import Top from "./Top";
import Footer from "./Footer";
import { Card, ListGroup } from 'react-bootstrap';
import logo from './logo-social.png';
import './style.css'

const Details = () => {
    return(
        <div>
            <Top/>
            <div className="text-center">
                
                <Card className="srodek" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Card.Title>Tytuł filmu</Card.Title>
                        <Card.Text>
                            Opis filmu
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Ocena: </ListGroup.Item>
                        <ListGroup.Item>Reżyser: </ListGroup.Item>
                        
                    </ListGroup>
                    
                </Card>
            </div>
            <Footer/>
        </div>
    )
}

export default Details;