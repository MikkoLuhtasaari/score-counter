import React, { useState } from "react";
import { Segment, Header, Form, Input } from "semantic-ui-react";
import tokoAlokasMoves from "../utils/tokoAlokasMoves";
import tokoAlokasPrices from "../utils/tokoAlokasPrices";

export const TokoAlokas = () => {
  const [moves, setMoves] = useState({
    move0: 0, move1: 0, move2: 0,
    move3: 0, move4: 0, move5: 0,
    move6: 0, move7: 0
  })
  const total = 
    (moves.move0 * tokoAlokasMoves[0].multiplier) + (moves.move1 * tokoAlokasMoves[1].multiplier) +
    (moves.move2 * tokoAlokasMoves[2].multiplier) + (moves.move3 * tokoAlokasMoves[3].multiplier) +
    (moves.move4 * tokoAlokasMoves[4].multiplier) + (moves.move5 * tokoAlokasMoves[5].multiplier) +
    (moves.move6 * tokoAlokasMoves[6].multiplier) + (moves.move7 * tokoAlokasMoves[7].multiplier);
  let price: string = "Valitettavasti ei palkintoa";
  if (total >= tokoAlokasPrices[0].min && total <= tokoAlokasPrices[0].max) {
    price = tokoAlokasPrices[0].name;
  } else if (total >= tokoAlokasPrices[1].min && total <= tokoAlokasPrices[1].max) {
    price = tokoAlokasPrices[1].name;
  } else if (total >= tokoAlokasPrices[2].min) {
    price = tokoAlokasPrices[2].name;
  }
 /*
 #b5bcc5
 #ebedf0
 #f5f6f7
 #d2d6dc
 #f9f9f9
 */
  return (
    <Segment className="FlexColumnCenter" style={{backgroundColor: "#ebedf0"}}>
      <Header
        as="h1"
        content="ToKo alokasluokan liikkeet"
      />
      <Form size="large">
        <Form.Group widths="equal">
          <Form.Field>
            <label>{`${tokoAlokasMoves[0].name} x${tokoAlokasMoves[0].multiplier}`}</label>
            <input
              type="number"
              value={moves.move0}
              onChange={(e) => setMoves({...moves, move0: e.target.value as any})}
              className="CenterText"
              style={{backgroundColor: "#f5f6f7"}}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[1].name} x${tokoAlokasMoves[1].multiplier}`}</label>
            <input
              type="number"
              value={moves.move1}
              onChange={(e) => setMoves({...moves, move1: e.target.value as any})}
              className="CenterText"
              style={{backgroundColor: "#f5f6f7"}}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[2].name} x${tokoAlokasMoves[2].multiplier}`}</label>
            <input
              type="number"
              value={moves.move2}
              onChange={(e) => setMoves({...moves, move2: e.target.value as any})}
              className="CenterText"
              style={{backgroundColor: "#f5f6f7"}}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[3].name} x${tokoAlokasMoves[3].multiplier}`}</label>
            <input
              type="number"
              value={moves.move3}
              onChange={(e) => setMoves({...moves, move3: e.target.value as any})}
              className="CenterText"
              style={{backgroundColor: "#f5f6f7"}}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[4].name} x${tokoAlokasMoves[4].multiplier}`}</label>
            <input
              type="number"
              value={moves.move4}
              onChange={(e) => setMoves({...moves, move4: e.target.value as any})}
              className="CenterText"
              style={{backgroundColor: "#f5f6f7"}}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[5].name} x${tokoAlokasMoves[5].multiplier}`}</label>
            <input
              type="number"
              value={moves.move5}
              onChange={(e) => setMoves({...moves, move5: e.target.value as any})}
              className="CenterText"
              style={{backgroundColor: "#f5f6f7"}}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[6].name} x${tokoAlokasMoves[6].multiplier}`}</label>
            <input
              type="number"
              value={moves.move6}
              onChange={(e) => setMoves({...moves, move6: e.target.value as any})}
              className="CenterText"
              style={{backgroundColor: "#f5f6f7"}}
            />
          </Form.Field>
          <Form.Field>
            <label>{`${tokoAlokasMoves[7].name} x${tokoAlokasMoves[7].multiplier}`}</label>
            <input
              type="number"
              value={moves.move7}
              onChange={(e) => setMoves({...moves, move7: e.target.value as any})}
              className="CenterText"
              style={{backgroundColor: "#f5f6f7"}}
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