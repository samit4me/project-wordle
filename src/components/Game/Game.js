import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

function RestartGameButton({ handleRestart }) {
  return <button onClick={handleRestart}>Restart Game</button>;
}

function WonBanner({ numOfGuesses, handleRestart }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
      <RestartGameButton handleRestart={handleRestart} />
    </div>
  );
}

function LostBanner({ answer, handleRestart }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <RestartGameButton handleRestart={handleRestart} />
    </div>
  );
}

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const gameWon = guesses.some((guess) => guess?.value === answer);
  const gameLost = !gameWon && guesses.length === NUM_OF_GUESSES_ALLOWED;
  const gameComplete = gameWon || gameLost;
  const guessResults = guesses.map(({ value }) => checkGuess(value, answer));

  console.log("#### ~ answer:", answer);

  function handleGuessSubmit(guess) {
    const nextGuesses = [...guesses, { id: crypto.randomUUID(), value: guess }];
    setGuesses(nextGuesses);
  }

  function handleRestart() {
    setAnswer(sample(WORDS));
    setGuesses([]);
  }

  return (
    <>
      <GuessResult guessResults={guessResults} />
      <GuessInput
        disabled={gameComplete}
        handleGuessSubmit={handleGuessSubmit}
      />
      <Keyboard guessResults={guessResults} />
      {gameWon && (
        <WonBanner
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {gameLost && <LostBanner answer={answer} handleRestart={handleRestart} />}
    </>
  );
}

export default Game;
