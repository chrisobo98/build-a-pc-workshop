import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const HomeJumbotron = (props) => {
  return (
    <div>
      <Jumbotron style= {{marginTop: 30}}fluid>
        <Container fluid>
          <h1 style={{textAlign: 'right'}}className="display-3">Find New and Hot Parts</h1>
          <p style={{textAlign: 'right'}} className="lead">From companies like AMD, Ryzen, and Gamers Republic</p>
         <Button className="btn pull-right" color="danger">Explore</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomeJumbotron;