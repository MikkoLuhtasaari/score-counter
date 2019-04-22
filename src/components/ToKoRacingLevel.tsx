import React from "react";
import { Header, Segment, Button } from "semantic-ui-react";
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
        {tokoLevels.map(level => 
          <Button key={level.title} basic={true} style={{margin: "0px"}}>
            <Link className="FlexCenter" key={level.link} to={level.link}>
              {level.title}
            </Link>
          </Button>
        )}
      </div>
    </Segment>
  );
}

export default TokoRacingLevel;