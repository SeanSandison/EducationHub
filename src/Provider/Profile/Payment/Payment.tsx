import React, { useState } from "react";
import "../../../Styles/PaymentStyle.css";

const Payment: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission logic here
    alert("Payment info submitted!");
  };

  return (
    <div className="info-container">
      <h1>Payment Details</h1>
      <form className="card-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name on Card</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            id="cardNumber"
            type="text"
            value={cardNumber}
            onChange={e => setCardNumber(e.target.value)}
            maxLength={19}
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiry">Expiry</label>
            <input
              id="expiry"
              type="text"
              value={expiry}
              onChange={e => setExpiry(e.target.value)}
              placeholder="MM/YY"
              maxLength={5}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvc">CVC</label>
            <input
              id="cvc"
              type="text"
              value={cvc}
              onChange={e => setCvc(e.target.value)}
              maxLength={4}
              required
            />
          </div>
        </div>
        <button className="update-button" type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;