import React from "react";
import { Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import tokoLevels from "../utils/tokoLevels";

export const TokoRacingLevel = (): JSX.Element => {
  return (
    <Segment className="FlexColumnCenter">
      <Header 
        as="h1"
        content="Valitse kilpailuluokkasi alla näkyvistä painikkeista"
      />
      <div className="FlexColumn">
        {tokoLevels.map(level => <Link key={level.title} to={level.link}>{level.title}</Link>)}
      </div>
    </Segment>
  );
}

export default TokoRacingLevel;