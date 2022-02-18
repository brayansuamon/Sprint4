import { React, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import "./App.css";
import Home from "./components/Home/Home";
import routes from "./routes/Routes";

function App() {
  const { state } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        {state.userData.uid !== "" &&
          routes.map(({ path, Component }) => {
            console.log(path, Component);
            return <Route key={path} path={path} element={<Component />} />;
          })}
        {/* <Route exact path="/Nickname" element={<Nickname />} /> */}
        <Route path="*" element={"not found"} />
      </Routes>
    </div>
  );
}

export default App;
