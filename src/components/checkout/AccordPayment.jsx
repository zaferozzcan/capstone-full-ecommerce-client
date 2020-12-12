import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useStateValue } from "../../Providers/StateProvider";
import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

export default function AccordPayment() {
  const [{ cart, user, card }, dispatch] = useStateValue();
  const history = useHistory();
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const stripe = useStripe();

  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const [paymentIntent, setPaymentIntent] = useState({});

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `http://localhost:5000/card/payments/create?total=${total * 100}`,
      });

      setClientSecret(response.data.paymentIntent.client_secret);
      setPaymentIntent(response.data.paymentIntent);
    };
    getClientSecret();
  }, [cart, total]);

  const handleSubmit = async (event) => {
    console.log("hadlesubmit");
    event.preventDefault();

    const paymentMethodReq = await stripe.createPaymentMethod({
      type: "card",
      card: card,
      billing_details: "",
    });

    const pay = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethodReq.paymentMethod.id,
    });
    console.log("pay", pay);
  };
  console.log("client sectret", clientSecret);
  function handleClick() {
    try {
      axios({
        method: "post",
        url: "http://localhost:5000/order",
        data: {
          user_id: user.uid,
          user_email: user.email,
          user_addres: "11 Moseley Street",
          user_city: "Boston",
          user_zip: "02125",
          user_state: "MA",
          orders: cart,
        },
      });
    } catch (err) {
      console.log("order send to data err", err);
    }

    dispatch({
      type: "EMPTY_CART",
    });
    history.replace("/");
  }

  console.log("card", card);
  console.log("paymentIntend", paymentIntent);
  return (
    <div className="accord-payment-container">
      <Card className="text-center">
        <Card.Header>Order Summary</Card.Header>
        <Card.Body>
          <Card.Text>Subtotal:{total}</Card.Text>
          <Card.Text>Tax</Card.Text>
          <Card.Text>Fee:{total}</Card.Text>
          <form onSubmit={handleSubmit}>
            <Button onClick={handleClick} type="button" variant="primary">
              Complete Purchase
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
