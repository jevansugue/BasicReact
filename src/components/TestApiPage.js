import React, { useState, useEffect } from "react";
import "../App.css";
import {
  getPostsUsingAwait,
  getPostsUsingThen,
  deleteSomethingUsingThen,
} from "../Services/apiCalls";
import Button from "@material-ui/core/Button";
import PostList from "./PostList";
import { Alert, AlertTitle } from "@material-ui/lab";

function TestApiPage() {
  const [postID, setpostID] = useState("");
  const [viewResult, setViewResult] = useState([]);
  const [showSucces, setShowSucces] = useState(false);

  useEffect(() => {
    console.log("viewResult: " + viewResult);
  }, [viewResult]);

  const submitForm = () => {
    let objectConstructor = {}.constructor;
    try {
      getPostsUsingThen(postID).then((response) => {
        //do not do this
        if (response.constructor === objectConstructor) {
          if (viewResult.length > 0) {
            setViewResult(viewResult.splice(0, 1, response));
          } else {
            setViewResult([]);
            viewResult.push(response);
            setViewResult(viewResult);
          }
          console.log("Not Array!");
        } else {
          setViewResult(response);
          showBanner();
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Done!");
    }
  };

  const showBanner = () => {
    setShowSucces(true);
    setTimeout(() => setShowSucces(false), 3000);
  };

  const submitFormAsync = async () => {
    let objectConstructor = {}.constructor;
    console.log("viewResult: " + viewResult);
    try {
      const response = await getPostsUsingAwait(postID);
      //it doesnt wait for the response
      console.log("myreponse: " + response);

      //do not do this
      if (response.constructor === objectConstructor) {
        // if (viewResult.length > 0) {
        //   setViewResult(viewResult.splice(0, 1, {}));
        // }
        // viewResult.push(response);
        setViewResult(response);
        console.log("Not Array!");
        showBanner();
      } else {
        setViewResult(response);
        showBanner();
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Done!");
    }
  };

  const deleteSomething = async () => {
    console.log("submit");
    try {
      const response = await deleteSomethingUsingThen(postID);
      //it doesnt wait for the response
      console.log("myreponse: " + response);
      // setViewResult(response);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Done!");
    }
  };

  return (
    <React.Fragment>
      {showSucces && (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      )}
      <div>
        <h1>TestApi Page</h1>
      </div>
      <div>
        <label> ID </label>
        <input
          type="text"
          value={postID}
          onChange={(e) => setpostID(e.target.value)}
        ></input>
      </div>
      <div className="submitButton">
        <Button
          variant="contained"
          color="primary"
            onClick={() => submitFormAsync()}
          // onClick={() => submitForm()}
        >
          Search
        </Button>
        <Button variant="contained" color="secondary" onClick={deleteSomething}>
          Delete
        </Button>
      </div>

      {/* <div className="resultsContainer">
        <h3 className="resultTitles">Title</h3>
        <div>{viewResult.title}</div>
        <h3>Body</h3>
        <div>{viewResult.body}</div>
      </div> */}

      {viewResult.map((element, index) => (
        <PostList item={element} key={index} />
      ))}
    </React.Fragment>
  );
}

export default TestApiPage;
