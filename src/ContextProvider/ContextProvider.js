import React, { createContext, useState } from "react";
import useFetch from "../Hook/useFetch";

export const ItemContext = createContext();

const ContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedLoggedIn = localStorage.getItem("login");
    if (savedLoggedIn) {
      return savedLoggedIn;
    } else {
      return false;
    }
  });
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      return JSON.parse(savedCart);
    } else {
      return [];
    }
  });

  const [order, setOrder] = useState(() => {
    const savedOrder = localStorage.getItem("order");
    if (savedOrder) {
      return JSON.parse(savedOrder);
    } else {
      return [];
    }
  });

  // Below is for sort functionality
  const { data, isFetching, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <ItemContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        data,
        isFetching,
        error,
        cart,
        setCart,
        order,
        setOrder,
      }}
    >
      {props.children}
    </ItemContext.Provider>
  );
};

export default ContextProvider;
