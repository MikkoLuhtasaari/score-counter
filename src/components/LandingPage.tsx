import React from "react";
import { Header, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import sports from "../utils/sports";

const LandingPage = (): JSX.Element => {
  return (
    <Segment className="FlexColumnCenter">
      <Header 
        as="h1"
        content="Valitse lajisi"
        className="Flex"
      />
      <div className="FlexColumn">
      {sports.map(sport => <Link className="Flex" key={sport.link} to={sport.link}>{sport.title}</Link>)}
      </div>
    </Segment>
  );
}

export default LandingPage;