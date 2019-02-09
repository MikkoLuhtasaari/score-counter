import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import TokoRacingLevel from "./components/ToKoRacingLevel";
import TokoAlokas from "./components/TokoAlokas";

export const App = () => {
  return (
    <BrowserRouter basename="/#">
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/toko" component={TokoRacingLevel} />
        <Route exact path="/toko/alokas" component={TokoAlokas} />
      </div>
    </BrowserRouter>
  );
}

export default App;
