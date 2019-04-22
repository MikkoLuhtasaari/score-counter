import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from 'react-helmet'
import './App.css';
import LandingPage from './components/LandingPage';
import TokoRacingLevel from "./components/ToKoRacingLevel";
import TokoAlokas from "./components/TokoAlokas";
import TokoAvoin from "./components/TokoAvoin";
import TokoVoittaja from "./components/TokoVoittaja";
import TokoErikoisvoittaja from "./components/TokoErikoisvoittaja";
import Info from "./components/Info";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Helmet>
          <title>TOKO pisteet</title>
          <noscript>
            Please enable Javascript to run this application.
          </noscript>
        </Helmet>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/toko" component={TokoRacingLevel} />
        <Route exact path="/toko/alokas" component={TokoAlokas} />
        <Route exact path="/toko/avoin" component={TokoAvoin} />
        <Route exact path="/toko/voittaja" component={TokoVoittaja} />
        <Route exact path="/toko/erikoisvoittaja" component={TokoErikoisvoittaja} />
        <Route exact path="/info" component={Info} />
      </div>
    </BrowserRouter>
  );
}

export default App;
