// import * as React from "react";
// import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EditProduct from "./pages/product/Edit";
import ProductList from "./pages/product/List";
import CreateProduct from "./pages/product/Create";

import EditService from "./pages/service/Edit";
import ServiceList from "./pages/service/List";
import CreateService from "./pages/service/Create";

import { Menu } from "./components/Menu";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Menu />
      <Container className="mt-5 text-white">
        <Row>
          <Col md={12}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product/create" element={<CreateProduct />} />
              <Route path="/product/edit/:id" element={<EditProduct />} />
              <Route exact path="/product" element={<ProductList />} />

              <Route path="/service/create" element={<CreateService />} />
              <Route path="/service/edit/:id" element={<EditService />} />
              <Route exact path="/service" element={<ServiceList />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
