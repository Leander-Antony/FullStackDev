import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Button,
  Image,
  ListGroup,
  Container,
} from "react-bootstrap";
import axios from "axios";
import Rating from "../Rating";

function ProductScreen({ params }) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    async function fetchproduct() {
      const { data } = await axios.get(`/product/${id}`);
      setProduct(data);
    }
    fetchproduct();
  }, []);
  return (
    <Container>
      <div>
        <Link to="/" className="btn btn-dark my-3">
          Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.productname}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color={"#f8e825"}
                />
                <ListGroup.Item>
                  <ListGroup.Item>Brand: {product.productbrand}</ListGroup.Item>
                  <ListGroup.Item>
                    Description: {product.productinfo}
                  </ListGroup.Item>
                </ListGroup.Item>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col> price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>No of item in stock</Col>
                    <Col>{product.stockcount}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.stockcount > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block btn-success"
                    disabled={product.stockcount == 0}
                    type="button"
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ProductScreen;
