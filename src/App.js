import React, { useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.module.css";
import Navigation from "./components/Nav/Navigation";
import GenerateFacesUsingFacialFeatures from "./containers/GenerateFacesUsingFacialFeatures/GenerateFacesUsingFacialFeatures";
import CompareFaces from "./containers/CompareFaces/CompareFaces";
import ExtractFacialFeatures from "./containers/ExtractFacialFeatures/ExtractFacialFeatures";
import Homepage from "./containers/Homepage/Homepage";
import Canvas from "./components/Canvas/Canvas";

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
