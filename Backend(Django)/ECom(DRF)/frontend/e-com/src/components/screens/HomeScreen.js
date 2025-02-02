import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import Product from "../Product";
import { listProducts } from "../../actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";


function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <Container>
      <br />
      <h1>products</h1>
      {
        loading ? (
          <Loader/>
        ):error ? (
          <Message variant={'danger'}>{error}</Message>
        ):(
          <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} cl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
        )
      }
    </Container>
  );
}

export default HomeScreen;
