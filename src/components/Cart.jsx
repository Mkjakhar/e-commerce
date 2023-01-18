import React, { useContext, useState } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { CartContext } from "../context/Context";
import emptycart from "../assets/png/empty-cart.webp";
const Cart = () => {
  const {
    cartData,
    increase,
    decrease,
    DeleteItems,
    count,
    totalPrice,
    clearCart,
  } = useContext(CartContext);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex-column vh-100 d-flex">
        <Container className="py-3">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/">
              <button className="py-2 px-4 rounded-2 border-0">Back</button>
            </Link>
            <button className="cart_btn position-relative">
              <TiShoppingCart className="fs-2" />{" "}
              <Badge
                className="position-absolute top-0 start-0"
                style={{ translate: "-50% -50%" }}
                bg="secondary"
              >
                {count}
              </Badge>
            </button>
          </div>{" "}
        </Container>
        <section className="bg_primary py-4 flex-grow-1 overflow-auto scroll_hide">
          <Container>
            <Row className="justify-content-center">
              {cartData.map((value) => {
                const { image, tittle, price, disc, id, quantity } = value;
                return (
                  <Col md={10} xl={8} className="mb-4" key={id}>
                    <Row className="product_cards py-2">
                      <div className="col-sm-4">
                        <img className="w-100" src={image} alt="products" />
                      </div>
                      <div className="col-sm-8">
                        <h3 className="fw-bold">{tittle}</h3>
                        <p className="mb-0">{disc}</p>
                        <p className="fw-bold">${price}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex gap-2 align-items-center">
                            {" "}
                            <button
                              onClick={() => decrease(id, price)}
                              className="fs-3 bg-transparent border-0"
                            >
                              <AiFillMinusCircle />
                            </button>
                            <p className="mb-0">Quantity: {quantity}</p>
                            <button
                              onClick={() => increase(id, price)}
                              className="fs-3 bg-transparent border-0"
                            >
                              <AiFillPlusCircle />
                            </button>
                          </div>
                          <MdDelete
                            style={{ cursor: "pointer" }}
                            className="fs-2"
                            onClick={() => DeleteItems(id, quantity, price)}
                          />
                        </div>
                      </div>
                    </Row>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </section>
        <div className="box_shodow">
          <Container className="py-3 d-flex align-items-center justify-content-between">
            <span className="mb-0">Total Price: ${totalPrice}</span>
            <div className="d-flex gap-4">
              <button
                className={`${
                  cartData < 1
                    ? "d-none"
                    : "order_btn text-white bg-danger px-4"
                }`}
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
              <button
                onClick={() => setShow(true)}
                className={`${
                  cartData < 1 ? "d-none" : "order_btn text-center px-4"
                }`}
              >
                Place Order
              </button>
            </div>
          </Container>
        </div>
      </div>
      <Modal centered show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>
            <p>No. of Items ordered {count}</p>
            <p className="fw-bold">Total Price : ${totalPrice}</p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Cart;
