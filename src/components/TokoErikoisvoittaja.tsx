import React, { useState } from "react";
import { Segment, Header, Form } from "semantic-ui-react";
import tokoPrices from "../utils/tokoPrices";
import tokoErikoisvoittajaMoves from "../utils/tokoErikoisvoittajaMoves";

const TokoVoittaja = () => {
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

  const total = 
    (move0 * tokoErikoisvoittajaMoves[0].multiplier) + (move1 * tokoErikoisvoittajaMoves[1].multiplier) +
    (move2 * tokoErikoisvoittajaMoves[2].multiplier) + (move3 * tokoErikoisvoittajaMoves[3].multiplier) +
    (move4 * tokoErikoisvoittajaMoves[4].multiplier) + (move5 * tokoErikoisvoittajaMoves[5].multiplier) +
    (move6 * tokoErikoisvoittajaMoves[6].multiplier) + (move7 * tokoErikoisvoittajaMoves[7].multiplier) +
    (move8 * tokoErikoisvoittajaMoves[8].multiplier) + (move9 * tokoErikoisvoittajaMoves[9].multiplier);
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
        content="ToKo erikoisvoittajaluokan liikkeet"
      />
    <Form size="large">
        <Form.Group widths="equal">
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[0].name} x${tokoErikoisvoittajaMoves[0].multiplier}`}</label>
            <input
              type="number"
              value={move0}
              onChange={(e) => setMove0(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[1].name} x${tokoErikoisvoittajaMoves[1].multiplier}`}</label>
            <input
              type="number"
              value={move1}
              onChange={(e) => setMove1(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[2].name} x${tokoErikoisvoittajaMoves[2].multiplier}`}</label>
            <input
              type="number"
              value={move2}
              onChange={(e) => setMove2(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[3].name} x${tokoErikoisvoittajaMoves[3].multiplier}`}</label>
            <input
              type="number"
              value={move3}
              onChange={(e) => setMove3(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[4].name} x${tokoErikoisvoittajaMoves[4].multiplier}`}</label>
            <input
              type="number"
              value={move4}
              onChange={(e) => setMove4(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[5].name} x${tokoErikoisvoittajaMoves[5].multiplier}`}</label>
            <input
              type="number"
              value={move5}
              onChange={(e) => setMove5(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[6].name} x${tokoErikoisvoittajaMoves[6].multiplier}`}</label>
            <input
              type="number"
              value={move6}
              onChange={(e) => setMove6(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[7].name} x${tokoErikoisvoittajaMoves[7].multiplier}`}</label>
            <input
              type="number"
              value={move7}
              onChange={(e) => setMove7(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[8].name} x${tokoErikoisvoittajaMoves[8].multiplier}`}</label>
            <input
              type="number"
              value={move8}
              onChange={(e) => setMove8(e.target.value as any)}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[9].name} x${tokoErikoisvoittajaMoves[9].multiplier}`}</label>
            <input
              type="number"
              value={move9}
              onChange={(e) => setMove9(e.target.value as any)}
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

export default TokoVoittaja;