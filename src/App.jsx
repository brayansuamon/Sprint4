import { React } from "react";
import Home from "./components/Home/Home";
import "./App.css";
import Profile from "./components/Profile/Profile";
import PostMessage from "./components/PostMessage/PostMessage";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Profile />
      <PostMessage />
    </div>
  );
}

export default App;
