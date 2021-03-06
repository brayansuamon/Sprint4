import { React, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import styles from "./App.module.scss";
import Home from "./components/Home/Home";
import routes from "./routes/Routes";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const { state } = useContext(AppContext);

  return (
    <div className={styles.App}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {state.userData.uid !== "" &&
          routes.map(({ path, Component }) => {
            return (
              <Route key={path} exact path={path} element={<Component />} />
            );
          })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
