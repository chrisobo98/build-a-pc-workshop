import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Explore from "./pages/Explore";
import Buy from "./pages/Buy";
import Home from "./pages/Home";
import List from "./pages/List";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/buy" component={Buy} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/list" component={List} />
        <Route exact path="/about" component={About} />

      </Wrapper>
      <Footer />
    </div>

  </Router>
);




export default App;

