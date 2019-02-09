import React, { useState } from "react";
import { Segment, Header, Form, Input } from "semantic-ui-react";
import tokoAlokasMoves from "../utils/tokoAlokasMoves";
import tokoAlokasPrices from "../utils/tokoAlokasPrices";

export const TokoAlokas = () => {
  const [move0, setMove0] = useState(0);
  const [move1, setMove1] = useState(0);
  const [move2, setMove2] = useState(0);
  const [move3, setMove3] = useState(0);
  const [move4, setMove4] = useState(0);
  const [move5, setMove5] = useState(0);
  const [move6, setMove6] = useState(0);
  const [move7, setMove7] = useState(0);
  const total = 
    (move0 * tokoAlokasMoves[0].multiplier) + (move1 * tokoAlokasMoves[1].multiplier) +
    (move2 * tokoAlokasMoves[2].multiplier) + (move3 * tokoAlokasMoves[3].multiplier) +
    (move4 * tokoAlokasMoves[4].multiplier) + (move5 * tokoAlokasMoves[5].multiplier) +
    (move6 * tokoAlokasMoves[6].multiplier) + (move7 * tokoAlokasMoves[7].multiplier);
  let price: string = "Valitettavasti ei palkintoa";
  if (total >= tokoAlokasPrices[0].min && total <= tokoAlokasPrices[0].max) {
    price = tokoAlokasPrices[0].name;
  } else if (total >= tokoAlokasPrices[1].min && total <= tokoAlokasPrices[1].max) {
    price = tokoAlokasPrices[1].name;
  } else if (total >= tokoAlokasPrices[2].min) {
    price = tokoAlokasPrices[2].name;
  }

  return (
    <Segment className="FlexColumnCenter">
      <Header
        as="h1"
        content="ToKo alokasluokan liikkeet"
      />
      <Form size="large">
        <Form.Group widths="equal">
          <Form.Field>
            <label>{`${tokoAlokasMoves[0].name} x${tokoAlokasMoves[0].multiplier}`}</label>
            <Input
              type="number"
              value={move0}
              onChange={(e) => setMove0(e.target.value as any)}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[1].name} x${tokoAlokasMoves[1].multiplier}`}</label>
            <Input
              type="number"
              value={move1}
              onChange={(e) => setMove1(e.target.value as any)}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[2].name} x${tokoAlokasMoves[2].multiplier}`}</label>
            <Input
              type="number"
              value={move2}
              onChange={(e) => setMove2(e.target.value as any)}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[3].name} x${tokoAlokasMoves[3].multiplier}`}</label>
            <Input
              type="number"
              value={move3}
              onChange={(e) => setMove3(e.target.value as any)}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[4].name} x${tokoAlokasMoves[4].multiplier}`}</label>
            <Input
              type="number"
              value={move4}
              onChange={(e) => setMove4(e.target.value as any)}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[5].name} x${tokoAlokasMoves[5].multiplier}`}</label>
            <Input
              type="number"
              value={move5}
              onChange={(e) => setMove5(e.target.value as any)}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[6].name} x${tokoAlokasMoves[6].multiplier}`}</label>
            <Input
              type="number"
              value={move6}
              onChange={(e) => setMove6(e.target.value as any)}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[7].name} x${tokoAlokasMoves[7].multiplier}`}</label>
            <Input
              type="number"
              value={move7}
              onChange={(e) => setMove7(e.target.value as any)}
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
  );
}

export default TokoAlokas;