class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;    
  }
  
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  }
  handleDelivery = () => {   
    const message = this.createChatBotMessage(     
      'Ok user,please select reason',
      {
        widget: "DeliveryOptions",
      }
    );    
    this.updateChatbotState(message);
  };
  handleReturn = () => {   
    const message = this.createChatBotMessage(     
      'Ok user,please selct reason for return',
      {
        widget: "ReturnOptions",
      }
    );    
    this.updateChatbotState(message);
  };

  handleOther = () => {   
    const message = this.createChatBotMessage(     
      'Ok user,please selct reason for other',
      {
        widget: "OtherOptions",
      }
    );    
    this.updateChatbotState(message);
  };

  handleFinalReply = () => {   
    const finalReply = this.createChatBotMessage("Ok user,sorry for inconvinience, raising ticket to Customer service center,they will contact you soon.")
    this.updateChatbotState(finalReply)
  };

  updateChatbotState(message) {
   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider