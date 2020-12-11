import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useStateValue } from "../../Providers/StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function AccordPayment() {
  const [{ cart, user, card }, dispatch] = useStateValue();
  const history = useHistory();
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const stripe = useStripe();

  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `http://localhost:5000/card/payments/create?total=${total * 100}`,
      });
      console.log("response secret key", response.data.clientSecret);
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart, total]);

  const handleSubmit = async (event) => {
    console.log("handle submit");
    event.preventDefault();

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      })
      .then(({ paymentIntent }) => {
        console.log("payment has been completed");

        // db.collection("users")
        //   .doc(user?.uid)
        //   .collection("orders")
        //   .doc(paymentIntent.id)
        //   .set({
        //     basket: basket,
        //     amount: paymentIntent.amount,
        //     created: paymentIntent.created,
        //   });

        setSucceeded(true);
        console.log("succeed true!");
        // setError(null);
        // setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/");
      });
  };

  // console.log("card", card);
  return (
    <div className="accord-payment-container">
      <Card className="text-center">
        <Card.Header>Order Summary</Card.Header>
        <Card.Body>
          <Card.Text>Subtotal:{total}</Card.Text>
          <Card.Text>Tax</Card.Text>
          <Card.Text>Fee:{total}</Card.Text>
          <Link to={"/orders"}>
            <Button type="submit" onClick={handleSubmit} variant="primary">
              Complete Purchase
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
