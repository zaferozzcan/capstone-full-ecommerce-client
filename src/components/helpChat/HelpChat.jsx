import React, { useState, useEffect } from "react";
// import queryString from "query-string";
import "../../style/HelpChat.css";
import io from "socket.io-client";
import { useStateValue } from "../../Providers/StateProvider";

let socket;
export default function HelpChat(props) {
  const [{ user }] = useStateValue();
  const endPoint = "http://localhost:5001";
  let socket;
  useEffect(() => {
    socket = io.connect(endPoint);
    console.log("socket", socket);
  }, []);
  console.log(props.location.search);
  return (
    <div>
      <div id="message-container"></div>
      <form id="send-container">
        <input type="text" id="message-input"></input>
        <button type="submit" id="send-button">
          Send
        </button>
      </form>
    </div>
  );
}
