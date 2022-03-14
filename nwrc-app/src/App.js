import React from "react";
import { About, Header, Footer, Gallery, Services, Contact } from "./container";
import { Navbar } from "./components";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <About />
    <Gallery />
    <Services />
    <Contact />
    <Footer />
  </div>
);

export default App;
