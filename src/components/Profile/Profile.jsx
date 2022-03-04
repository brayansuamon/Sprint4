import { React, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

import Header from "./Header/Header";
import ContainerTweets from "./ContainerTweets/ContainerTweets";

function Profile() {
  const {
    state: {
      tweets,
      userData: { uid },
    },
  } = useContext(AppContext);

  const posted = tweets.filter((tweet) => tweet.uid === uid);
  const followers = tweets.filter((tweet) => tweet.followers.includes(uid));

  return (
    <section>
      <Header />
      <Routes>
        <Route path="/post" element={<ContainerTweets tweets={posted} />} />
        <Route
          path="/favorites"
          element={<ContainerTweets tweets={followers} />}
        />
      </Routes>
    </section>
  );
}

export default Profile;
