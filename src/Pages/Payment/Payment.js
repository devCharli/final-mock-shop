/* eslint-disable */
import "./payment.css";
import "../Auth/auth.css";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { ItemContext } from "../../ContextProvider/ContextProvider";

const Payment = ({ total }) => {
  const { cart, setCart, setOrder, order } = useContext(ItemContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cardNum, setCardNum] = useState("");
  const history = useHistory();

  const handleClick = () => {
    if (!order.length) {
      if (name === "" || address === "" || cardNum === "") {
        alert("Fill out the form, please");
      } else {
        history.push("/profile");
        setOrder([...order, ...cart]);
        localStorage.setItem("order", JSON.stringify([...order, ...cart]));
        localStorage.setItem(
          "info",
          JSON.stringify({ name, address, cardNum })
        );
        setCart([]);
      }
    }
    if (order.length) {
      history.push("/profile");
      setOrder([...order, ...cart]);
      localStorage.setItem("order", JSON.stringify([...order, ...cart]));
      // localStorage.setItem("info", JSON.stringify({ name, address, cardNum }));
      setCart([]);
    }
  };

  return (
    <div>
      {!order.length ? (
        <form className="login-form" style={{ paddingTop: "50px" }}>
          <div className="form-control">
            <label>Name</label>
            <input
              placeholder="Your name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Address</label>
            <input
              placeholder="Your address..."
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Card Number</label>
            <input
              placeholder="Card Number"
              onChange={(e) => setCardNum(e.target.value)}
            />
          </div>
          <div className="form-control">
            <button onClick={handleClick} className="payment-btn">
              Pay ${total}
            </button>
          </div>
        </form>
      ) : (
        <form className="login-form" style={{ paddingTop: "50px" }}>
          <div className="form-control">
            <button onClick={handleClick} className="payment-btn">
              Pay ${total}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Payment;

{
  /* <form className="login-form" style={{ paddingTop: "50px" }}>
      <div className="form-control">
        <label>Name</label>
        <input
          placeholder="Your name..."
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Address</label>
        <input
          placeholder="Your address..."
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Card Number</label>
        <input
          placeholder="Card Number"
          onChange={(e) => setCardNum(e.target.value)}
        />
      </div>
      <div className="form-control">
        <button onClick={handleClick} className="payment-btn">
          Pay ${total}
        </button>
      </div>
    </form> */
}
