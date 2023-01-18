import React from "react";
import { createContext, useState, useEffect } from "react";
import product from "../productData";
export const CartContext = createContext();
const getLoginData = () => {
  const localData = localStorage.getItem("SignUpDetail");
  if (localData) {
    return JSON.parse(localStorage.getItem("SignUpDetail"));
  } else {
    return [];
  }
};
const Context = ({ children }) => {
  const [productsData, setproductsData] = useState(product);
  // cart quantity
  const [count, setcount] = useState(0);
  // Cart Data
  const [cartData, setcartData] = useState([]);
  // Total Price
  const [totalPrice, settotalPrice] = useState(0);
  // Page Theme
  const [theme, settheme] = useState(true);
  // userdetail
  const [userDeatil, setuserDeatil] = useState([]);
  //
  const [toggleLogin, settoggleLogin] = useState(true);
  // afterLogin
  const [afterLogin, setafterLogin] = useState(true);
  // Add to cart
  const handleCount = (id, quantity, price) => {
    setcount(count + quantity);
    const itemsData = productsData.find((curELem) => {
      if (curELem.id === id) {
        return curELem;
      }
      return;
    });
    setcartData([...cartData, itemsData]);
    settotalPrice(totalPrice + price);
  };

  // Increase the quantity
  const increase = (id, price) => {
    const value = cartData.map((curElem) => {
      if (curElem.id === id) {
        return { ...curElem, quantity: curElem.quantity + 1 };
      } else {
        return curElem;
      }
    });
    setcartData(value);
    setcount(count + 1);
    settotalPrice(totalPrice + price);
  };
  // Decrease the quantity
  const decrease = (id, price) => {
    const value = cartData.map((curElem) => {
      if (curElem.id === id) {
        if (curElem.quantity <= 1) {
          id.disabled = true;
          return { ...curElem, quantity: (curElem.quantity = 1) };
        } else {
          setcount(count - 1);
          return { ...curElem, quantity: curElem.quantity - 1 };
        }
      } else {
        return curElem;
      }
    });
    setcartData(value);
    settotalPrice(totalPrice - price);
  };
  // Delete Items
  const DeleteItems = (id, quantity, price) => {
    const value = cartData.filter((curElem) => {
      if (curElem.id !== id) {
        return { ...curElem };
      }
      return;
    });
    setcartData(value);
    setcount(count - quantity);
    settotalPrice(totalPrice - price * quantity);
  };
  // clear cart
  const clearCart = () => {
    setcartData([]);
    setcount(0);
    settotalPrice(0);
  };
  // fliterItems
  const filterItems = (value) => {
    const detail = product.filter((lateElem) => {
      return lateElem.category === value;
    });
    setproductsData(detail);
  };
  const allData = () => {
    setproductsData(product);
  };
  // sign up
  const [loginDetail, setloginDetail] = useState({
    UserName: "",
    Email: "",
    Password: "",
  });
  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setloginDetail({ ...loginDetail, [name]: value });
  };
  const [loginData, setloginData] = useState(getLoginData());

  useEffect(() => {
    localStorage.setItem("SignUpDetail", JSON.stringify(loginData));
  }, [loginData]);

  const SignUpSubmit = (e) => {
    e.preventDefault();
    setloginDetail({ UserName: "", Email: "", Password: "" });
    setloginData([...loginData, loginDetail]);
  };

  return (
    <CartContext.Provider
      value={{
        productsData,
        count,
        handleCount,
        cartData,
        increase,
        decrease,
        DeleteItems,
        theme,
        settheme,
        totalPrice,
        settotalPrice,
        clearCart,
        filterItems,
        allData,
        toggleLogin,
        settoggleLogin,
        handleInput,
        getLoginData,
        loginData,
        setloginData,
        loginDetail,
        setloginDetail,
        SignUpSubmit,
        setuserDeatil,
        userDeatil,
        afterLogin,
        setafterLogin,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default Context;
