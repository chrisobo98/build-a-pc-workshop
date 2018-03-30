import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const HomeExplore = (props) => {
  return (
    <div>
      <Jumbotron className="exploreJumbotron" style= {{marginTop: 30}}fluid>
        <Container fluid>
          <h1 className="display-3">Guaranteed Best Prices</h1>
          <p className="lead">Your one stop shop for all PC needs!</p>
          <Button color="danger">Buy Now</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default HomeExplore;