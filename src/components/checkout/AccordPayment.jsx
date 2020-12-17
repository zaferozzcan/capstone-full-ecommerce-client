import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useStateValue } from "../../Providers/StateProvider";
import { useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

export default function AccordPayment() {
  const [{ cart, user, card, address }, dispatch] = useStateValue();
  const history = useHistory();
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const stripe = useStripe();

  const [process, setProcess] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const [paymentIntent, setPaymentIntent] = useState({});

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `https://capstone-store-api.herokuapp.com/card/payments/create?total=${
          total * 100
        }`,
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
    setProcess(true);
    try {
      axios({
        method: "post",
        url: "https://capstone-store-api.herokuapp.com/order",
        data: {
          user_id: user.uid,
          user_email: user.email,
          user_addres: address,
          // user_city: "Boston",
          // user_zip: "02125",
          // user_state: "MA",
          orders: cart,
        },
      });
    } catch (err) {
      console.log("order send to data err", err);
    }
    dispatch({
      type: "EMPTY_CART",
    });
    setTimeout(() => {
      history.replace("/");
    }, 1000);
  }

  console.log("card", card);
  console.log("paymentIntend", paymentIntent);
  return (
    <div className="accord-payment-container">
      <Card className="text-center">
        <Card.Header>Order Summary</Card.Header>
        <Card.Body>
          <Card.Text>Subtotal:${total}</Card.Text>
          <Card.Text>Tax:Tax Free</Card.Text>
          <Card.Text>Fee:0</Card.Text>
          <form onSubmit={handleSubmit}>
            <Button
              variant={process ? "success" : "primary"}
              onClick={handleClick}
              type="button"
            >
              {process ? "Processing" : "Complete Purchase"}
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
