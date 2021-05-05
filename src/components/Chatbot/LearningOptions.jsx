import React from "react";
import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Delivery",
    handler: props.actionProvider.handleDelivery,
    id: 1,},
    { text: "Return Shoes", 
    handler: props.actionProvider.handleReturn,
     id: 2 },
   
    { text: "Other",
     handler: props.actionProvider.handleOther,
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

export default LearningOptions;

