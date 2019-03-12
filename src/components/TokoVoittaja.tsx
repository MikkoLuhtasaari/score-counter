import React, { useState } from "react";
import { Segment, Header, Form } from "semantic-ui-react";
import tokoPrices from "../utils/tokoPrices";
import tokoVoittajaMoves from "../utils/tokoVoittajaMoves";

const TokoVoittaja = () => {
  const [moves, setMoves] = useState({
    move0: 0, move1: 0, move2: 0,
    move3: 0, move4: 0, move5: 0,
    move6: 0, move7: 0, move8: 0,
    move9: 0
  })

  const total = 
    (moves.move0 * tokoVoittajaMoves[0].multiplier) + (moves.move1 * tokoVoittajaMoves[1].multiplier) +
    (moves.move2 * tokoVoittajaMoves[2].multiplier) + (moves.move3 * tokoVoittajaMoves[3].multiplier) +
    (moves.move4 * tokoVoittajaMoves[4].multiplier) + (moves.move5 * tokoVoittajaMoves[5].multiplier) +
    (moves.move6 * tokoVoittajaMoves[6].multiplier) + (moves.move7 * tokoVoittajaMoves[7].multiplier) +
    (moves.move8 * tokoVoittajaMoves[8].multiplier) + (moves.move9 * tokoVoittajaMoves[9].multiplier);
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
        content="ToKo voittajaluokan liikkeet"
      />
    <Form size="large">
        <Form.Group widths="equal">
          <Form.Field>
            <label>{`${tokoVoittajaMoves[0].name} x${tokoVoittajaMoves[0].multiplier}`}</label>
            <input
              type="number"
              value={moves.move0}
              onChange={(e) => setMoves({...moves, move0: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoVoittajaMoves[1].name} x${tokoVoittajaMoves[1].multiplier}`}</label>
            <input
              type="number"
              value={moves.move1}
              onChange={(e) => setMoves({...moves, move1: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoVoittajaMoves[2].name} x${tokoVoittajaMoves[2].multiplier}`}</label>
            <input
              type="number"
              value={moves.move2}
              onChange={(e) => setMoves({...moves, move2: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoVoittajaMoves[3].name} x${tokoVoittajaMoves[3].multiplier}`}</label>
            <input
              type="number"
              value={moves.move3}
              onChange={(e) => setMoves({...moves, move3: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoVoittajaMoves[4].name} x${tokoVoittajaMoves[4].multiplier}`}</label>
            <input
              type="number"
              value={moves.move4}
              onChange={(e) => setMoves({...moves, move4: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoVoittajaMoves[5].name} x${tokoVoittajaMoves[5].multiplier}`}</label>
            <input
              type="number"
              value={moves.move5}
              onChange={(e) => setMoves({...moves, move5: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoVoittajaMoves[6].name} x${tokoVoittajaMoves[6].multiplier}`}</label>
            <input
              type="number"
              value={moves.move6}
              onChange={(e) => setMoves({...moves, move6: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoVoittajaMoves[7].name} x${tokoVoittajaMoves[7].multiplier}`}</label>
            <input
              type="number"
              value={moves.move7}
              onChange={(e) => setMoves({...moves, move7: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoVoittajaMoves[8].name} x${tokoVoittajaMoves[8].multiplier}`}</label>
            <input
              type="number"
              value={moves.move8}
              onChange={(e) => setMoves({...moves, move8: e.target.value as any})}
              className="CenterText"
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoVoittajaMoves[9].name} x${tokoVoittajaMoves[9].multiplier}`}</label>
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