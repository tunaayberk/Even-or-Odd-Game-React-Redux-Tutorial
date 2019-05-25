import React from "react";
import { connect } from "react-redux";
import { expandInstructions, collapseInstructions } from "../actions/settings";

const Instructions = props => {
  const {
    instructionExpanded,
    expandInstructions,
    collapseInstructions
  } = props;

  if (instructionExpanded) {
    return (
      <div>
        <h4>Instructions are very clear!</h4>
        <button onClick={collapseInstructions}>Close Instructions</button>
      </div>
    );
  }
  return (
    <div>
      <h4>Read the Instructions!</h4>
      <button onClick={expandInstructions}>Read More</button>
    </div>
  );
};

export default connect(
  state => ({ instructionExpanded: state.settings.instructionExpanded }),
  { expandInstructions, collapseInstructions }
)(Instructions);
