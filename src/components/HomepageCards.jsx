import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/Context";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";
const getBtnValue = () => {
  const btnData = localStorage.getItem("btnValue");
  if (btnData) {
    return JSON.parse(localStorage.getItem("btnValue"));
  } else {
    return true;
  }
};
const HomepageCards = ({ image, tittle, price, disc, id, quantity }) => {
  const { handleCount, DeleteItems, theme } = useContext(CartContext);
  const [btnToggle, setbtnToggle] = useState(getBtnValue());
  // product data with context
  useEffect(() => {
    localStorage.setItem("btnValue", JSON.stringify(btnToggle));
  }, [btnToggle]);
  return (
    <>
      <Col sm={6} lg={4} xl={3} className="mb-4 h-100" key={id}>
        <motion.div
          layout
          transition={{ duration: 0.6 }}
          className={`${
            theme ? "product_cards h-100" : "product_cards h-100 bg-dark"
          }`}
        >
          <img className="w-100" src={image} alt="products" />
          <div className="p-2">
            <h4 className="fw-bold">{tittle}</h4>
            <p>{disc}</p>
            <p className="fw-bold text-success">Price: ${price}</p>
            {btnToggle ? (
              <button
                onClick={() =>
                  handleCount(id, quantity, price, setbtnToggle(false))
                }
                className={`${
                  theme
                    ? "order_btn w-100 text-center"
                    : "order_btn w-100 text-center order_btn_dark"
                }`}
              >
                Add to Cart
              </button>
            ) : (
              <button
                onClick={() =>
                  DeleteItems(id, quantity, price, setbtnToggle(true))
                }
                className="order_btn text-white bg-danger w-100 text-center"
              >
                Remove from Cart
              </button>
            )}
          </div>
        </motion.div>
      </Col>
    </>
  );
};

export default HomepageCards;
