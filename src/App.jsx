import { React, useContext, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "./context/AppContext";
import "./App.css";
import Home from "./components/Home/Home";
import routes from "./Routes/Routes";

function App() {
  const { userLog } = useContext(AppContext);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={<Home />} />
        {userLog &&
          routes.map(({ path, component }) => {
            <Route key={path} path={path} component={<component />} />;
          })}
        <Route path="*" element={"not found"} />
      </Routes>
      <Home />
      {/* <Profile /> */}
      {/* <PostMessage /> */}
      {/* <Nickname /> */}
    </div>
  );
}

export default App;
