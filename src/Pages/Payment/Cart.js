import "./payment.css";
import { useContext, useState, useEffect } from "react";
import { ItemContext } from "../../ContextProvider/ContextProvider";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

import Payment from "./Payment";
const Cart = () => {
  const { cart, setCart } = useContext(ItemContext);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let totalPrice = cart
      .map((item) => item.price * item.count)
      .reduce((acc, curr) => (acc += curr), 0);
    totalPrice.toFixed(2);
    setTotal(totalPrice);
  };

  // if not using useEffect, total calculation doesn't work

  useEffect(() => {
    const calculateTotal = () => {
      let totalPrice = cart
        .map((item) => item.price * item.count)
        .reduce((acc, curr) => (acc += curr), 0);
      totalPrice.toFixed(2);
      setTotal(totalPrice);
    };
    calculateTotal();
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // localStorage.setItem("cart", JSON.stringify(cart));

  const handleChange = (index) => {
    let copy = JSON.parse(JSON.stringify(cart));
    copy[index] = { ...copy[index], count: ++copy[index].count };
    // copy[index].count += 1;
    setCart(copy);

    calculateTotal();
  };

  const handleDecrease = (index) => {
    let copy = JSON.parse(JSON.stringify(cart));
    if (copy[index].count > 0) {
      copy[index].count -= 1;
      calculateTotal();
    } else {
      return null;
    }
    setCart(copy);
  };

  return (
    <div className="container">
      <div className="cart">
        <h3>
          CART <FaShoppingCart />
        </h3>
        <div className="cart-table">
          <div className="cart-head">
            <ul>
              <li>Title</li>
              <li>Price</li>
              <li>Quan</li>
              <li>Add</li>
              <li>Rem</li>
            </ul>
          </div>
          <div className="cart-head">
            {cart &&
              cart.map((item, index) => {
                return (
                  <ul key={item.id}>
                    <li>{item.title}</li>
                    <li>${item.price * item.count}</li>
                    <li>{item.count}</li>
                    <li onClick={() => handleChange(index)}>
                      <FaPlus />
                    </li>
                    <li onClick={() => handleDecrease(index)}>
                      <FaMinus />
                    </li>
                  </ul>
                );
              })}
          </div>
        </div>
        <div className="total-price">
          <p>Total</p>
          <p>${total}</p>
        </div>
      </div>
      <Payment total={total} />
    </div>
  );
};

export default Cart;
