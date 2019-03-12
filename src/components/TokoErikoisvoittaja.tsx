import React, { useState } from "react";
import { Segment, Header, Form } from "semantic-ui-react";
import tokoPrices from "../utils/tokoPrices";
import tokoErikoisvoittajaMoves from "../utils/tokoErikoisvoittajaMoves";

const TokoVoittaja = () => {
  const [moves, setMoves] = useState({
    move0: 0, move1: 0, move2: 0,
    move3: 0, move4: 0, move5: 0,
    move6: 0, move7: 0, move8: 0,
    move9: 0
  })

  const total = 
    (moves.move0 * tokoErikoisvoittajaMoves[0].multiplier) + (moves.move1 * tokoErikoisvoittajaMoves[1].multiplier) +
    (moves.move2 * tokoErikoisvoittajaMoves[2].multiplier) + (moves.move3 * tokoErikoisvoittajaMoves[3].multiplier) +
    (moves.move4 * tokoErikoisvoittajaMoves[4].multiplier) + (moves.move5 * tokoErikoisvoittajaMoves[5].multiplier) +
    (moves.move6 * tokoErikoisvoittajaMoves[6].multiplier) + (moves.move7 * tokoErikoisvoittajaMoves[7].multiplier) +
    (moves.move8 * tokoErikoisvoittajaMoves[8].multiplier) + (moves.move9 * tokoErikoisvoittajaMoves[9].multiplier);
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
              value={moves.move0}
              onChange={(e) => setMoves({...moves, move0: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[1].name} x${tokoErikoisvoittajaMoves[1].multiplier}`}</label>
            <input
              type="number"
              value={moves.move1}
              onChange={(e) => setMoves({...moves, move1: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[2].name} x${tokoErikoisvoittajaMoves[2].multiplier}`}</label>
            <input
              type="number"
              value={moves.move2}
              onChange={(e) => setMoves({...moves, move2: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[3].name} x${tokoErikoisvoittajaMoves[3].multiplier}`}</label>
            <input
              type="number"
              value={moves.move3}
              onChange={(e) => setMoves({...moves, move3: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[4].name} x${tokoErikoisvoittajaMoves[4].multiplier}`}</label>
            <input
              type="number"
              value={moves.move4}
              onChange={(e) => setMoves({...moves, move4: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[5].name} x${tokoErikoisvoittajaMoves[5].multiplier}`}</label>
            <input
              type="number"
              value={moves.move5}
              onChange={(e) => setMoves({...moves, move5: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[6].name} x${tokoErikoisvoittajaMoves[6].multiplier}`}</label>
            <input
              type="number"
              value={moves.move6}
              onChange={(e) => setMoves({...moves, move6: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[7].name} x${tokoErikoisvoittajaMoves[7].multiplier}`}</label>
            <input
              type="number"
              value={moves.move7}
              onChange={(e) => setMoves({...moves, move7: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[8].name} x${tokoErikoisvoittajaMoves[8].multiplier}`}</label>
            <input
              type="number"
              value={moves.move8}
              onChange={(e) => setMoves({...moves, move8: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoErikoisvoittajaMoves[9].name} x${tokoErikoisvoittajaMoves[9].multiplier}`}</label>
            <input
              type="number"
              value={moves.move9}
              onChange={(e) => setMoves({...moves, move9: e.target.value as any})}
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