import React from "react";
import "./LearningOptions.css";

const DeliveryOptions = (props) => {
  const options = [
    { text: "Not Delivered",
    handler: props.actionProvider.handleFinalReply,
    id: 1,},
    { text: "Damaged Delivery", 
    handler: props.actionProvider.handleFinalReply,
    id: 2 },
   
    { text: "Deliverd empty package",
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

export default DeliveryOptions;

