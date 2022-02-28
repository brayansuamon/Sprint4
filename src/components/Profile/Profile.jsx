import { React, useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import ShowMessage from "../ShowMessage/ShowMessage";

import Header from "./Header/Header";

function Profile() {
  const state = useContext(AppContext);

  const posted = state.tweets.filter((tweet) => {
    return tweet.uid === state.userData.uid;
  });
  useEffect(() => {
    console.log(posted);
    return () => {};
  }, []);
  return (
    <body>
      <Header />
      <Routes>
        <Route
          exact
          path="/post"
          render={() => {
            <>
              {posted.map((tweet) => {
                return <ShowMessage key={tweet.id} {...tweet} />;
              })}
            </>;
          }}
        />
        <Route
          exact
          path="favorites"
          render={() => {
            <>
              {posted.map((tweet) => {
                return <ShowMessage key={tweet.id} {...tweet} />;
              })}
            </>;
          }}
        />
      </Routes>
    </body>
  );
}

export default Profile;
