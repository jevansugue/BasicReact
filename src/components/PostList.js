import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";

import "../App.css";

const PostList = (props) => {
  //   const location = useLocation();
  //   useEffect(() => {}, []);
  return (
    <div className="resultsContainer" id={props.id}>
      <h3 className="resultTitles">Title</h3>
      <div>{props.item.title}</div>
      <h3>Body</h3>
      <div>{props.item.body}</div>
    </div>
  );
};

export default PostList;
