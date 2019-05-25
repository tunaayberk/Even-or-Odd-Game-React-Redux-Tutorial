import React from "react";
import { connect } from "react-redux";

const correctGuessesRecordKey = "CORRECT_GUESSES_RECORD_even-odd";

const checkRecord = correctGuess => {
  const record = Number(localStorage.getItem(correctGuessesRecordKey));

  if (correctGuess > record) {
    localStorage.setItem(correctGuessesRecordKey, correctGuess);
    return { record: correctGuess, isNewRecord: true };
  }

  return { record, isNewRecord: false };
};

const GameState = ({ remaining, correctGuesses }) => {
  const guessText = correctGuesses === 1 ? "guess" : "guesses";

  const { record, isNewRecord } = checkRecord(correctGuesses);

  const recordLabel = isNewRecord ? "!New Record!" : "Record";

  return (
    <div>
      <h3>
        {recordLabel}: {record}
      </h3>
      <p>{remaining} cards remaining</p>
      <p>
        {correctGuesses} correct {guessText}
      </p>
    </div>
  );
};

export default connect(
  ({ deck: { remaining }, gameState: { correctGuesses } }) => ({
    remaining,
    correctGuesses
  })
)(GameState);
