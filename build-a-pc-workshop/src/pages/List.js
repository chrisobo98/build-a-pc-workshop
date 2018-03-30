import React from 'react';
import Col from "../components/Col";
import Row from "../components/Row";
import ProductList from "../components/ProductList";
import Product from "../components/Product";
import Compare from "../components/Compare";
import Container from "../components/Container";
import { Table, Button, ButtonGroup } from 'reactstrap';


export default class Example extends React.Component {
  render() {
    return (
      <div>
      <Container>
      <Row>
        <Col style={{ marginTop: 30, marginBottom: 30 }} size="md-12">
            <h1 className="text-center">Your Handy Dandy List</h1>
        </Col>
      </Row>
      <Table hover>
        <thead>
          <tr>
            <th>Component</th>
            <th>Brand</th>
            <th>Specifications</th>
            <th>Price</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {/* 1st on the list */}
          <tr>
            <td>B350M Gaming PRO AM4 AMD B350 SATA 6Gb/s USB 3.1 HDMI Micro ATX AMD Motherboard</td>
            <td>MSI</td>
            <td>1 x PCIe 3.0 x16 slots
              - RYZEN series processors support x16 mode
              - 7th Gen A-series/ Athlon processors support x8 mode</td>
            <td>$64.99</td>
            <ButtonGroup>
            <Button style={{ marginTop: 10, marginLeft: 10}} color="danger">Buy Now</Button>
            <Button style={{ marginTop: 10}} color="warning">Remove</Button>
            <Button style={{ marginTop: 10}} color="success">Compare</Button>
            </ButtonGroup>
          </tr>
          {/* Second on the list */}
          <tr>
            <td>B350M Gaming PRO AM4 AMD B350 SATA 6Gb/s USB 3.1 HDMI Micro ATX AMD Motherboard</td>
            <td>MSI</td>
            <td>1 x PCIe 3.0 x16 slots
              - RYZEN series processors support x16 mode
              - 7th Gen A-series/ Athlon processors support x8 mode</td>
            <td>$64.99</td>
            <ButtonGroup>
            <Button style={{ marginTop: 10, marginLeft: 10}} color="danger">Buy Now</Button>
            <Button style={{ marginTop: 10}} color="warning">Remove</Button>
            <Button style={{ marginTop: 10}} color="success">Compare</Button>
            </ButtonGroup>
          </tr>
          {/* third on the list */}
          <tr>
            <td>B350M Gaming PRO AM4 AMD B350 SATA 6Gb/s USB 3.1 HDMI Micro ATX AMD Motherboard</td>
            <td>MSI</td>
            <td>1 x PCIe 3.0 x16 slots
              - RYZEN series processors support x16 mode
              - 7th Gen A-series/ Athlon processors support x8 mode</td>
            <td>$64.99</td>
            <ButtonGroup>
            <Button style={{ marginTop: 10, marginLeft: 10}} color="danger">Buy Now</Button>
            <Button style={{ marginTop: 10}} color="warning">Remove</Button>
            <Button style={{ marginTop: 10}} color="success">Compare</Button>
            </ButtonGroup>
          </tr>
        </tbody>
      </Table>
      <ProductList/>
      <Product/>
      <Compare/>
      </Container>
      </div>

    );
  }
}

