import { createChatBotMessage } from 'react-chatbot-kit';
import React from 'react';
import LearningOptions from "./LearningOptions";
import DeliveryOptions from "./DeliveryOptions";
import ReturnOptions from "./ReturnOptions";
import OtherOptions from "./OtherOptions";
import BotAvatar from "./BotAvatar";



const config  = {
  botName: `MsShoe`,
  customComponents:{
    botAvatar: (props) => <BotAvatar {...props}/>
  },
  initialMessages: [
    createChatBotMessage("Hi, I'm happy to help you.", {
      widget: "learningOptions",
    }),
  ],
  state: {
    user: 'true',
    signinstate: 'signedin'
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "DeliveryOptions",
      widgetFunc: (props) => <DeliveryOptions {...props} />,
         
    },
    {
      widgetName: "ReturnOptions",
      widgetFunc: (props) => <ReturnOptions {...props} />,
         
    },
    {
      widgetName: "OtherOptions",
      widgetFunc: (props) => <OtherOptions {...props} />,
         
    },
  
  ],
}


export default config