import React from "react";
import { Route } from "react-router-dom";

import "./App.module.css";
import Navigation from "./components/Nav/Navigation";
import GenerateFacesUsingFacialFeatures from "./containers/GenerateFacesUsingFacialFeatures";
import CompareFaces from "./containers/CompareFaces";
import ExtractFacialFeatures from "./containers/ExtractFacialFeatures";
import Homepage from "./containers/Homepage";

const App = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Route path="/" component={Homepage} exact />
        <Route
          path="/generate-faces-using-facial-features"
          component={GenerateFacesUsingFacialFeatures}
        />
        <Route path="/compare-faces" component={CompareFaces} />
        <Route
          path="/extract-facial-features"
          component={ExtractFacialFeatures}
        />
      </main>
    </React.Fragment>
  );
};

export default App;
