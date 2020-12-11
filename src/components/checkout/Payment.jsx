import React from "react";
import "../../style/Payment.css";
import Accord from "./Accord";
import SignIn from "../../components/auth/SignIn";
import AccordPayment from "./AccordPayment";
import { useStateValue } from "../../Providers/StateProvider";

export default function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <>
      {user ? <Accord /> : <SignIn />}
      {user ? <AccordPayment /> : null}
    </>
  );
}
