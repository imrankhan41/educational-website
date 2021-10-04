import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Teacher = (props) => {
    const{name,img,description,country,designation}=props.teacher;
    return (
        <div className="d-flex">
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ width: '285px',height:"200px" }} variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {description.slice(1,450)}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                <ListGroupItem>{designation}</ListGroupItem>
                    <ListGroupItem>{country}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Call Me</Card.Link>
                
                </Card.Body>
                </Card>
        </div>
    );
};

export default Teacher;