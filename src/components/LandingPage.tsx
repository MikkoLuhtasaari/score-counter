import React from "react";
import { Header, Segment, Button } from "semantic-ui-react";
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
      {sports.map(sport => <Button key={sport.title} basic={true}><Link className="FlexCenter" key={sport.link} to={sport.link}>{sport.title}</Link></Button>)}
      </div>
    </Segment>
  );
}

export default LandingPage;