import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";

import TitleAndIcon from "./sections/TitleAndIcon";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navigations from "./sections/Navigations";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigations />
        <TitleAndIcon />
        <AboutSection />
        <SkillSection />
      </Provider>
    </div>
  );
}

export default App;
