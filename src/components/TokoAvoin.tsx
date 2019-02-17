import React, { useState } from "react";
import { Segment, Header, Form } from "semantic-ui-react";
import tokoPrices from "../utils/tokoPrices";
import tokoAvoinMoves from "../utils/tokoAvoinMoves";

const TokoAvoin = () => {
  const [move0, setMove0] = useState(0);
  const [move1, setMove1] = useState(0);
  const [move2, setMove2] = useState(0);
  const [move3, setMove3] = useState(0);
  const [move4, setMove4] = useState(0);
  const [move5, setMove5] = useState(0);
  const [move6, setMove6] = useState(0);
  const [move7, setMove7] = useState(0);
  const [move8, setMove8] = useState(0);
  const [move9, setMove9] = useState(0);
  const [move10, setMove10] = useState(0);

  const total = 
    (move0 * tokoAvoinMoves[0].multiplier) + (move1 * tokoAvoinMoves[1].multiplier) +
    (move2 * tokoAvoinMoves[2].multiplier) + (move3 * tokoAvoinMoves[3].multiplier) +
    (move4 * tokoAvoinMoves[4].multiplier) + (move5 * tokoAvoinMoves[5].multiplier) +
    (move6 * tokoAvoinMoves[6].multiplier) + (move7 * tokoAvoinMoves[7].multiplier) +
    (move8 * tokoAvoinMoves[8].multiplier) + (move9 * tokoAvoinMoves[9].multiplier) +
    (move10 * tokoAvoinMoves[10].multiplier);
  let price: string = "Valitettavasti ei palkintoa";
  if (total >= tokoPrices[0].min && total <= tokoPrices[0].max) {
    price = tokoPrices[0].name;
  } else if (total >= tokoPrices[1].min && total <= tokoPrices[1].max) {
    price = tokoPrices[1].name;
  } else if (total >= tokoPrices[2].min) {
    price = tokoPrices[2].name;
  }
  return (
    <Segment className="FlexColumnCenter">
      <Header
        as="h1"
        content="ToKo avoimenluokan liikkeet"
      />
    <Form size="large">
        <Form.Group widths="equal">
          <Form.Field>
            <label>{`${tokoAvoinMoves[0].name} x${tokoAvoinMoves[0].multiplier}`}</label>
            <input
              type="number"
              value={move0}
              onChange={(e) => setMove0(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[1].name} x${tokoAvoinMoves[1].multiplier}`}</label>
            <input
              type="number"
              value={move1}
              onChange={(e) => setMove1(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[2].name} x${tokoAvoinMoves[2].multiplier}`}</label>
            <input
              type="number"
              value={move2}
              onChange={(e) => setMove2(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[3].name} x${tokoAvoinMoves[3].multiplier}`}</label>
            <input
              type="number"
              value={move3}
              onChange={(e) => setMove3(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[4].name} x${tokoAvoinMoves[4].multiplier}`}</label>
            <input
              type="number"
              value={move4}
              onChange={(e) => setMove4(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[5].name} x${tokoAvoinMoves[5].multiplier}`}</label>
            <input
              type="number"
              value={move5}
              onChange={(e) => setMove5(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[6].name} x${tokoAvoinMoves[6].multiplier}`}</label>
            <input
              type="number"
              value={move6}
              onChange={(e) => setMove6(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[7].name} x${tokoAvoinMoves[7].multiplier}`}</label>
            <input
              type="number"
              value={move7}
              onChange={(e) => setMove7(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[8].name} x${tokoAvoinMoves[8].multiplier}`}</label>
            <input
              type="number"
              value={move8}
              onChange={(e) => setMove8(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[9].name} x${tokoAvoinMoves[9].multiplier}`}</label>
            <input
              type="number"
              value={move9}
              onChange={(e) => setMove9(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[10].name} x${tokoAvoinMoves[10].multiplier}`}</label>
            <input
              type="number"
              value={move10}
              onChange={(e) => setMove10(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
        </Form.Group>
      </Form>
      <Header 
        as="h2"
        content={`Kokonaispisteet: ${total}`}
      />
      <Header 
        as="h2"
        content={price}
      />
    </Segment>
  )
};

export default TokoAvoin;