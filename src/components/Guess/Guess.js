import React from "react";
import { NUM_OF_LETTERS_ALLOWED } from "../../constants";
import { range } from "../../utils";

function Cell({ letter, status }) {
  const className = `cell ${status ?? ''}`.trim()

  return <span className={className}>{letter}</span>;
}

function Guess({ value = "" }) {
  return (
    <p className="guess">
      {range(NUM_OF_LETTERS_ALLOWED).map((num) => (
        <Cell
          key={num}
          letter={value?.[num]?.letter}
          status={value?.[num]?.status}
        />
      ))}
    </p>
  );
}

export default Guess;
