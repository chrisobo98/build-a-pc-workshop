import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import CardDeck from "../components/Col";
import BuildCards from "../components/BuildCards";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";
import Alert from "../components/Alert";

import BuyNav from "../components/BuyNav";

const Home = () => (
  <div>
        <Row>
            <Col style={{ marginTop: 30 }} size="md-12">
                <h1 className="text-center">Pick a component</h1>
            </Col>
        </Row>

    <Container style={{ marginTop: 30 }}>
        <BuyNav/>
    </Container>

         <Row>
            <Col style={{ marginTop: 30 }} size="md-12">
                <h1 className="text-center">Or search</h1>
            </Col>
        </Row>
   <Container style={{ minHeight: "80%" }}>
        <Alert type="danger" style={{ marginBottom: 10 }}>
          {/* {this.state.error} */}
        </Alert>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        //   breeds={this.state.breeds}
        />
        {/* <SearchResults results={this.state.results} /> */}
      </Container>
   
        {/* Products Start */}
      <Container>
        <Row>
          <BuildCards>
            <CardDeck/>
          </BuildCards>
        </Row>
      </Container>
      <Container>
        <Row>
          <BuildCards>
            <CardDeck/>
          </BuildCards>
        </Row>
      </Container>
      <Container>
        <Row>
          <BuildCards>
            <CardDeck/>
          </BuildCards>
        </Row>
      </Container>

  </div>
);

export default Home;
