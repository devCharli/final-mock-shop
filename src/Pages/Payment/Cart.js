import "./payment.css";
import { useContext, useState, useEffect } from "react";
import { ItemContext } from "../../ContextProvider/ContextProvider";
import { FaPlus, FaMinus } from "react-icons/fa";
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

  //useEffect를 쓰지 않으면 상품에서 cart로 갈때 total이 계산되지 않음

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
        <h3>Cart</h3>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Add</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="cart-table-body">
            {cart &&
              cart.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price * item.count}</td>
                    <td>{item.count}</td>
                    <td onClick={() => handleChange(index)}>
                      <FaPlus />
                    </td>
                    <td onClick={() => handleDecrease(index)}>
                      <FaMinus />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <table>
          <tr>
            <td>Total</td>
            <td>${total}</td>
          </tr>
        </table>
      </div>
      <Payment total={total} />
    </div>
  );
};

export default Cart;
