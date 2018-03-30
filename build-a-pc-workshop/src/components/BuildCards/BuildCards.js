import React from "react";
import { Card, Button, CardImg, CardTitle, CardDeck,
  CardSubtitle, CardBody } from 'reactstrap';

const BuildCards = props => {
  return (
  
    
    <CardDeck>
      <Card>
        {/* original placehold of cardImg size is 256x180, made it 180x336 to make it look nicer */}
        <CardImg style={{ height: 180, width: 336, marginTop: 30, marginBottom: 30 }} top width="100%" src="http://technesia.com/images/custom-pc.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Modest Gaming Build</CardTitle>
          <CardSubtitle style={{ color: 'gray', marginBottom: 5 }}>AMD Ryzen 5 2400G<br/>Parametric Video Card (Price: 0.00 - 350.00; Chipset: GeForce GTX 1060 6GB; Length: 223mm - 403mm)<br/>Fractal Design Focus G Mini (Black) MicroATX Mini Tower</CardSubtitle>
          <Button color="danger" style={{ marginRight: 5}}>Buy</Button>
          <Button color="success" style={{ marginRight: 5 }}>List</Button>
          <Button color="primary">Share</Button>
        </CardBody>
      </Card>
      <Card>
        {/* original placehold of cardImg size is 256x180, made it 180x336 to make it look nicer */}
        <CardImg style={{ height: 180, width: 336, marginTop: 30, marginBottom: 30 }} top width="100%" src="http://www.vktechservice.com/images/PC_Build.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Gaming, and Streaming Build</CardTitle>
          <CardSubtitle style={{ color: 'gray', marginBottom: 5 }}>AMD Ryzen 5 2400G<br/>Parametric Video Card (Price: 0.00 - 350.00; Chipset: GeForce GTX 1060 6GB; Length: 223mm - 403mm)<br/>Fractal Design Focus G Mini (Black) MicroATX Mini Tower</CardSubtitle>
          <Button color="danger" style={{ marginRight: 5 }}>Buy</Button>
          <Button color="success" style={{ marginRight: 5 }}>List</Button>
          <Button color="primary">Share</Button>
        </CardBody>
      </Card>
      <Card>
        {/* original placehold of cardImg size is 256x180, made it 180x336 to make it look nicer */}
        <CardImg style={{ height: 180, width: 336, marginTop: 30, marginBottom: 30 }} top width="100%" src="http://naplescomputers.com/images/Articles/custom_pc.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Excellent Intel Gaming Build</CardTitle>
          <CardSubtitle style={{ color: 'gray', marginBottom: 5 }}>AMD Ryzen 5 2400G<br/>Parametric Video Card (Price: 0.00 - 350.00; Chipset: GeForce GTX 1060 6GB; Length: 223mm - 403mm)<br/>Fractal Design Focus G Mini (Black) MicroATX Mini Tower</CardSubtitle>
          <Button color="danger" style={{ marginRight: 5 }}>Buy</Button>
          <Button color="success" style={{ marginRight: 5 }}>List</Button>
          <Button color="primary">Share</Button>

        </CardBody>
      </Card>
    </CardDeck>
  );
};



export default BuildCards;
