import React, { useContext, useState, useEffect } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../context/Context";
import HomepageCards from "../components/HomepageCards";
import { BsSun, BsFillSunFill } from "react-icons/bs";

const Products = () => {
  // product data with context
  const { productsData, count, allData, settheme, theme, filterItems } =
    useContext(CartContext);

  const [renderTime, setrenderTime] = useState(0);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setrenderTime(renderTime + 1);
  //   }, 1000);
  // });
  // category wise
  const updatedData = [...new Set(productsData.map((elem) => elem.category))];
  const [search, setSearch] = useState();
  const filteredProducts = productsData.filter((newProduct) => {
    if (
      newProduct.tittle.toLowerCase().includes(search) ||
      newProduct.category.toLowerCase().includes(search)
    ) {
      return newProduct;
    }
  });
  console.log(filteredProducts);
  return (
    <>
      <section>
        <Container>
          <div className="d-flex justify-content-between py-3 align-items-center">
            <span
              style={{ cursor: "pointer" }}
              className="d-inline-block fw-bold fs-3"
            >
              M-SHOP
            </span>
            <form
              className="w-50 position-relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                onChange={(e) => {
                  setSearch(e.target.value.toLowerCase());
                }}
                className="rounded-2 text-black search_bar fs-6 w-100"
                type="search"
                placeholder="Search.............."
              />
              <div
                className="position-absolute start-0 bg-black d-flex flex-column gap-1 rounded-2 border border-top-0"
                style={{ top: "100%" }}
              >
                {filteredProducts.map((ele, id) => {
                  return (
                    <Row key={id} className="product_cards w-100 py-1 m-0">
                      <div className="col-sm-2">
                        <img className="w-100" src={ele.image} alt="products" />
                      </div>
                      <div className="col-sm-10">
                        <p className="fw-bold">{ele.tittle}</p>
                        {/* <div className="d-flex justify-content-between align-items-center">
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
                        </div> */}
                      </div>
                    </Row>
                  );
                })}
              </div>
            </form>
            <div className="d-flex align-items-center gap-4">
              {/* <BsSun
                style={{ cursor: "pointer" }}
                className="fs-4"
                onClick={() => settheme(!theme)}
              /> */}
              {/* <BsFillSunFill
                style={{ cursor: "pointer" }}
                className="fs-4"
                onClick={() => settheme(!theme)}
              /> */}
              <Link to="/cart">
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
              </Link>
            </div>
          </div>
        </Container>
        <section className={`${theme ? "bg-white py-3" : "bg-black py-3"}`}>
          <Container className="w-100 overflow-auto scroll_hide">
            {" "}
            <div className="d-flex align-items-center gap-4 justify -content-between">
              {updatedData.map((value, i) => {
                return (
                  <button
                    key={i}
                    onClick={() => filterItems(value)}
                    className={`${
                      theme
                        ? "order_btn px-4 text-center"
                        : "order_btn px-4 text-center order_btn_dark"
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
              <button
                onClick={() => allData()}
                className={`${
                  theme
                    ? "order_btn px-4 text-center"
                    : "order_btn px-4 text-center order_btn_dark"
                }`}
              >
                All
              </button>
            </div>
          </Container>
        </section>

        <section className={`${theme ? "bg_primary py-4" : "bg-black py-4"}`}>
          <Container>
            <Row>
              {productsData.map((value) => {
                return <HomepageCards key={value.id} {...value} />;
              })}
            </Row>
          </Container>
        </section>
      </section>
    </>
  );
};

export default Products;
