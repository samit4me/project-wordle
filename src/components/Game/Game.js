import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuessSubmit(guess) {
    const nextGuesses = [...guesses, { id: crypto.randomUUID(), value: guess }];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResult guesses={guesses} />
      <GuessInput handleGuessSubmit={handleGuessSubmit} />
    </>
  );
}

export default Game;
