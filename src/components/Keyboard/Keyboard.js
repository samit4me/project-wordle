import React from "react";

const keyboardRows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function Keyboard({ guessResults }) {
  const letterStatusMap = guessResults
    .flat()
    .reduce((acc, { letter, status }) => {
      // Letter has no existing status, so set it
      if (!acc[letter]) {
        return { ...acc, [letter]: status };
      }
      // Letters with an existing status can only be overridden with a more accurate guess!
      // e.g. a correct letter in one guess cannot become misplaced from another guess
      if (acc[letter] === "correct") return acc;
      if (status === "correct") return { ...acc, [letter]: status };
      if (acc[letter] === "misplaced") return acc;
      if (status === "misplaced") return { ...acc, [letter]: status };
      return { ...acc, [letter]: status };
    }, {});

  return (
    <div className="keyboard">
      {keyboardRows.map((row, index) => (
        <div key={index} className="row">
          {row.map((letter) => {
            const className = `key ${letterStatusMap[letter] ?? ""}`.trim();
            return <button key={letter} className={className}>{letter}</button>;
          })}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
