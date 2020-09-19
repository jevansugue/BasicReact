import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../App.css";

function Item() {
  const location = useLocation();
  useEffect(() => {
  }, []);
  return (
    <div>
      <h1>Item page</h1>
      <div>
        <span>Title: </span>
        {location.title}
      </div>
      <div>
        <span>Body: </span>
        {location.body}
      </div>
    </div>
  );
}

export default Item;
