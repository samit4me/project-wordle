import React from "react";
import { range } from "../../utils";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

function GuessResult({ guessResults }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} value={guessResults[num]} />
      ))}
    </div>
  );
}

export default GuessResult;
