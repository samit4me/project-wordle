import React from "react";
import { range } from "../../utils";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResult({ guesses }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);

  return (
    <div className="guess-results">
      {rows.map((row) => (
        <Guess key={row} value={guesses[row]?.value} />
      ))}
    </div>
  );
}

export default GuessResult;