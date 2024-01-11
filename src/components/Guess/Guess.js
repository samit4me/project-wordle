import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = `cell ${status ?? ''}`.trim()

  return <span className={className}>{letter}</span>;
}

function Guess({ answer, value = "" }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_ALLOWED).map((num) => (
        <Cell
          key={num}
          letter={result?.[num]?.letter}
          status={result?.[num]?.status}
        />
      ))}
    </p>
  );
}

export default Guess;
