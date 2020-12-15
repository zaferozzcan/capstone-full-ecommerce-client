import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HelpChat() {
  const [userName, setUserName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="join-outer-container">
      <div className="join-inner-container">
        <h1 className="heading">Join</h1>
        <div>
          <input placeholder="" className="" type="text" onChange={}></input>
        </div>
        <div>
          <input placeholder="" className="" type="text" onChange={}></input>
        </div>
        <Link to={}>
          <button className="button" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
