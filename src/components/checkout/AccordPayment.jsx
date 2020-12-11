import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useStateValue } from "../../Providers/StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

export default function AccordPayment() {
  const [{ cart, user, card }, dispatch] = useStateValue();
  // const history = useHistory();
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  // cart total \

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${total * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart, total]);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

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
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        // history.replace("/orders");
      });
  };

  // const handleChange = (event) => {
  //   // Listen for changes in the CardElement
  //   // and display any errors as the customer types their card details
  //   setDisabled(event.empty);
  //   setError(event.error ? event.error.message : "");
  // };
  if (card) {
    setDisabled(false);
  }
  console.log("card", card);
  return (
    <div className="accord-payment-container">
      <Card className="text-center">
        <Card.Header>Order Summary</Card.Header>
        <Card.Body>
          <Card.Text>Subtotal:{total}</Card.Text>
          <Card.Text>Tax</Card.Text>
          <Card.Text>Fee:{total}</Card.Text>
          {/* <Button type="submit" onClick={handleSubmit} variant="primary">
            Place Your Order
          </Button> */}
          <Button
            disabled={disabled}
            type="submit"
            onClick={handleSubmit}
            variant="primary"
          >
            <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
