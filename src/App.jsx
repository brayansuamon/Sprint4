import { React, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import "./App.scss";
import Home from "./components/Home/Home";
import routes from "./routes/Routes";
import Profile from "./components/Profile/Profile";

function App() {
  const { state } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {state.userData.uid !== "" &&
          routes.map(({ path, Component }) => {
            return (
              <Route key={path} exact path={path} element={<Component />} />
            );
          })}
        <Route exact path="/PostMessage" element={<Profile />} />
        <Route path="*" element={"not found"} />
      </Routes>
    </div>
  );
}

export default App;
