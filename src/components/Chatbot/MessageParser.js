class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet()
    }
    if (lowerCaseMessage.includes("Delivery")) {
      this.actionProvider.handleDelivery();
    }
    if (lowerCaseMessage.includes("Return Shoes")) {
      this.actionProvider.handleReturn();
    }
    if (lowerCaseMessage.includes("Other")) {
      this.actionProvider.handleOther();
    }
  }
}

export default MessageParser
  
 