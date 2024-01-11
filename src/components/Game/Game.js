import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function WonBanner({ numOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </div>
  );
}

function LostBanner() {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const gameWon = guesses.some((guess) => guess?.value === answer);
  const gameLost = !gameWon && guesses.length === NUM_OF_GUESSES_ALLOWED;
  const gameComplete = gameWon || gameLost;

  function handleGuessSubmit(guess) {
    const nextGuesses = [...guesses, { id: crypto.randomUUID(), value: guess }];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResult answer={answer} guesses={guesses} />
      <GuessInput
        disabled={gameComplete}
        handleGuessSubmit={handleGuessSubmit}
      />
      {gameWon && <WonBanner numOfGuesses={guesses.length} />}
      {gameLost && <LostBanner />}
    </>
  );
}

export default Game;
