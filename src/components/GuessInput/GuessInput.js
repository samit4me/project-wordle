import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    const allLetters = guess.split("").every((c) => c.match(/^[a-z]$/gi));
    if (guess.length !== 5 || !allLetters) {
      alert("Please enter a 5 letter word!");
    }
    console.log({ guess });
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
        onChange={handleGuessChange}
        required
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
