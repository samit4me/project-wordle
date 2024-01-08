import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Guess({ value = "" }) {
  const cells = range(NUM_OF_LETTERS_ALLOWED);

  return (
    <p className="guess">
      {cells.map((cell) => (
        <span key={cell} className="cell">
          {value[cell]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
