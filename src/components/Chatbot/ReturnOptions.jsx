import React from "react";
import "./LearningOptions.css";

const ReturnOptions = (props) => {
  const options = [
    { text: "Color Mismatch",
    handler: props.actionProvider.handleFinalReply,
    id: 1,},

    { text: "Size Mismatch", 
    handler: props.actionProvider.handleFinalReply,
    id: 2 },
   
    { text: "Style Issue", 
    handler: props.actionProvider.handleFinalReply,
    id: 3 },
    
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default ReturnOptions;

