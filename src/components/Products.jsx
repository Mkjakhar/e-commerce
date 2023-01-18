import React, { useContext, useState } from "react";
import { Badge, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../context/Context";
import HomepageCards from "../components/HomepageCards";
import { BsFillSunFill } from "react-icons/bs";
import product from "../productData";

const updatedData = [...new Set(product.map((elem) => elem.category))];
const Products = () => {
  // product data with context
  const {
    productsData,
    count,
    allData,
    userDeatil,
    settheme,
    theme,
    filterItems,
    afterLogin,
    setafterLogin,
  } = useContext(CartContext);
  // category wise
  const [search, setSearch] = useState();
  const filteredProducts = productsData.filter((newProduct) => {
    if (
      newProduct.tittle.toLowerCase().includes(search) ||
      newProduct.category.toLowerCase().includes(search)
    ) {
      return newProduct;
    }
  });
  const searchitems = (e) => {
    // setSearch(e.target.value.toLowerCase());
    if (e.target.value > 0) {
      return setSearch(e.target.value.toLowerCase()), console.log("done");
    } else {
      return console.log("not");
    }
  };
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
                onChange={searchitems}
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
                      </div>
                    </Row>
                  );
                })}
              </div>
            </form>
            <div className="d-flex align-items-center gap-4">
              {afterLogin ? (
                <Link to="/LoginPage">
                  <button className="btn btn-primary">Login</button>
                </Link>
              ) : (
                <button
                  onClick={() => setafterLogin(true)}
                  className="btn btn-primary"
                >
                  Logout
                </button>
              )}
              <BsFillSunFill
                style={{ cursor: "pointer" }}
                className="fs-4"
                onClick={() => settheme(!theme)}
              />
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
            {afterLogin ? "" : <h1>Welcome {userDeatil.UserName}</h1>}
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
