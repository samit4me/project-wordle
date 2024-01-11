import React from "react";

import { NUM_OF_LETTERS_ALLOWED } from "../../constants";

function GuessInput({ disabled = false, handleGuessSubmit }) {
  const [guess, setGuess] = React.useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    const allLetters = guess.split("").every((c) => c.match(/^[a-z]$/gi));
    if (guess.length !== NUM_OF_LETTERS_ALLOWED || !allLetters) {
      window.alert(`Please enter a ${NUM_OF_LETTERS_ALLOWED} letter word!`);
    }
    handleGuessSubmit(guess);
    setGuess("");
  }

  function handleGuessChange(event) {
    setGuess(event.target.value.toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleFormSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        disabled={disabled}
        onChange={handleGuessChange}
        required
        pattern={`[a-zA-Z]{${NUM_OF_LETTERS_ALLOWED}}`}
        title={`${NUM_OF_LETTERS_ALLOWED} letter word`}
      />
    </form>
  );
}

export default GuessInput;
