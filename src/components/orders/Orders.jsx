import React, { useEffect, useState } from "react";
import Order from "./Order";
import Axios from "axios";
import { useStateValue } from "../../Providers/StateProvider";

export default function Orders() {
  const [{ user }, dispatch] = useStateValue();
  const [pastOrders, setPastOrders] = useState();
  useEffect(() => {
    const getPastOrders = async () => {
      const response = await Axios({
        method: "GET",
        url: `https://capstone-store-api.herokuapp.com/order/${
          user && user.uid
        }`,
      });

      setPastOrders(response.data);
    };
    getPastOrders();
  }, []);
  // console.log("pastorders", pastOrders.item);
  return (
    <div className="orders-container">
      {pastOrders &&
        pastOrders.map((order, index) => {
          console.log("order", order);
          return <Order key={index} orderItems={order.orders} />;
        })}
    </div>
  );
}
