import React, { useState } from "react";
import { Segment, Header, Form } from "semantic-ui-react";
import tokoPrices from "../utils/tokoPrices";
import tokoAvoinMoves from "../utils/tokoAvoinMoves";

const TokoAvoin = () => {
  const [moves, setMoves] = useState({
    move0: 0, move1: 0, move2: 0,
    move3: 0, move4: 0, move5: 0,
    move6: 0, move7: 0, move8: 0,
    move9: 0, move10: 0
  })

  const total = 
    (moves.move0 * tokoAvoinMoves[0].multiplier) + (moves.move1 * tokoAvoinMoves[1].multiplier) +
    (moves.move2 * tokoAvoinMoves[2].multiplier) + (moves.move3 * tokoAvoinMoves[3].multiplier) +
    (moves.move4 * tokoAvoinMoves[4].multiplier) + (moves.move5 * tokoAvoinMoves[5].multiplier) +
    (moves.move6 * tokoAvoinMoves[6].multiplier) + (moves.move7 * tokoAvoinMoves[7].multiplier) +
    (moves.move8 * tokoAvoinMoves[8].multiplier) + (moves.move9 * tokoAvoinMoves[9].multiplier) +
    (moves.move10 * tokoAvoinMoves[10].multiplier);
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
              value={moves.move0}
              onChange={(e) => setMoves({...moves, move0: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[1].name} x${tokoAvoinMoves[1].multiplier}`}</label>
            <input
              type="number"
              value={moves.move1}
              onChange={(e) => setMoves({...moves, move1: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[2].name} x${tokoAvoinMoves[2].multiplier}`}</label>
            <input
              type="number"
              value={moves.move2}
              onChange={(e) => setMoves({...moves, move2: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[3].name} x${tokoAvoinMoves[3].multiplier}`}</label>
            <input
              type="number"
              value={moves.move3}
              onChange={(e) => setMoves({...moves, move3: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[4].name} x${tokoAvoinMoves[4].multiplier}`}</label>
            <input
              type="number"
              value={moves.move4}
              onChange={(e) => setMoves({...moves, move4: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[5].name} x${tokoAvoinMoves[5].multiplier}`}</label>
            <input
              type="number"
              value={moves.move5}
              onChange={(e) => setMoves({...moves, move5: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[6].name} x${tokoAvoinMoves[6].multiplier}`}</label>
            <input
              type="number"
              value={moves.move6}
              onChange={(e) => setMoves({...moves, move6: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[7].name} x${tokoAvoinMoves[7].multiplier}`}</label>
            <input
              type="number"
              value={moves.move7}
              onChange={(e) => setMoves({...moves, move7: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[8].name} x${tokoAvoinMoves[8].multiplier}`}</label>
            <input
              type="number"
              value={moves.move8}
              onChange={(e) => setMoves({...moves, move8: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[9].name} x${tokoAvoinMoves[9].multiplier}`}</label>
            <input
              type="number"
              value={moves.move9}
              onChange={(e) => setMoves({...moves, move9: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAvoinMoves[10].name} x${tokoAvoinMoves[10].multiplier}`}</label>
            <input
              type="number"
              value={moves.move10}
              onChange={(e) => setMoves({...moves, move10: e.target.value as any})}
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