import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <h1>Heck yeah!!</h1>
      </Container>
      <Footer />
    </>
  );
}

export default App;
