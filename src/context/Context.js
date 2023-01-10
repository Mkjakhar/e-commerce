import React from "react";
import { createContext, useState } from "react";
import product from "../productData";
export const CartContext = createContext();

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default Context;
