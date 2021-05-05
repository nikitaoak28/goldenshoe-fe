import React from "react";
import "./LearningOptions.css";

const OtherOptions = (props) => {
  const options = [
    { text: "Refund",
    handler: props.actionProvider.handleFinalReply,
    id: 1,},

    { text: "Can not place order", 
    handler: props.actionProvider.handleFinalReply,
    id: 2 },
   
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

export default OtherOptions;

