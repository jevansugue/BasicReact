export const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          return resolve(json);
        });
    } catch (error) {
      console.error(error);
      return reject(error);
    } finally {
      console.log("do something after the call");
    }
  });
};

export const getPostsUsingThen = (id) => {
  return new Promise((resolve, reject) => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          return resolve(json);
        });
    } catch (error) {
      console.error(error);
      return reject(error);
    } finally {
      console.log("do something after the call");
    }
  });
};

export const getPostsUsingAwait = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    // console.log(await response.json()); // this works

    // console.log(response.json()) //this does not work
    // return Promise.resolve(await response.json());
    return response.json();
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  } finally {
    console.log("do something after the call");
  }
};

export const submitPostsUsingThen = (request) => {
  // console.log('title! '+title);
  return new Promise((resolve, reject) => {
    try {
      fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => {
        console.log(response.json);
        return resolve(response.json());
      });
    } catch (error) {
      console.error(error);
      return reject(error);
    } finally {
      console.log("do something after the call");
    }
  });
};

export const postSomethingUsingAwait = () => async () => {
  try {
    const response = fetch(`https://jsonplaceholder.typicode.com/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    console.log(response.json);
    return Promise.resolve(response.json());
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  } finally {
    console.log("do something after the call");
  }
};

export const deleteSomethingUsingThen = (id) => {
  try {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return Promise.resolve(json);
      });
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  } finally {
    console.log("do something after the call");
  }
};
