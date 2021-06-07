import logo from "./logo.svg";
import "./App.css";
import CarouselContainer from "./components/CarouselContainer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Project } from "./components/Project";
import { ContactUs } from "./components/ContactUs";
import { AppNavBar } from "./Common/AppNavBar";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/about-us">
          <AboutUs />
        </Route>

        <Route path="/project">
          <Project />
        </Route>

        <Route path="/contact-us">
          <ContactUs />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

    // <div>
    //   <h1 className="bg-dark text-light p-2 sticky-top d-flex justify-content-center ">
    //     Welcome to Financial Rating
    //   </h1>

    //   <CarouselContainer />
    // </div>
  );
}

export default App;
