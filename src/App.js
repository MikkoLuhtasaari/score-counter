import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import TokoRacingLevel from "./components/ToKoRacingLevel";
import TokoAlokas from "./components/TokoAlokas";
import TokoAvoin from "./components/TokoAvoin";
import TokoVoittaja from "./components/TokoVoittaja";
import TokoErikoisvoittaja from "./components/TokoErikoisvoittaja";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/toko" component={TokoRacingLevel} />
        <Route exact path="/toko/alokas" component={TokoAlokas} />
        <Route exact path="/toko/avoin" component={TokoAvoin} />
        <Route exact path="/toko/voittaja" component={TokoVoittaja} />
        <Route exact path="/toko/erikoisvoittaja" component={TokoErikoisvoittaja} />
      </div>
    </BrowserRouter>
  );
}

export default App;
