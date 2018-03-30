import React from "react";
import NukaCarousel from "../components/NukaCarousel";
import Container from "../components/Container";
import Row from "../components/Row";
import CardDeck from "../components/Col";
import HomeList from "../components/HomeList";
import BuildCards from "../components/BuildCards";
import HomeJumbotron from "../components/HomeJumbotron";
import HomeExplore from "../components/HomeExplore"

const Home = () => (
  <div>
    <NukaCarousel/>
      <Container>
        <Row>
          <BuildCards>
            <CardDeck/>
          </BuildCards>
        </Row>
      </Container>
        <HomeJumbotron/>
      <Container>
        <Row>
          <HomeList/>
        </Row>
      </Container>
    <HomeExplore/>

  </div>
);

export default Home;
