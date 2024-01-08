import React from "react";

function GuessResult({ guesses }) {
  if (!guesses.length) return;
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p key={guess.id} className="guess">
          {guess.value}
        </p>
      ))}
    </div>
  );
}

export default GuessResult;
