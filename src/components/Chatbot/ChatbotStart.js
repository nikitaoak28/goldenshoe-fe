import React from 'react'
import Chatbot from 'react-chatbot-kit'
import boticon from './logo.svg'
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import './Chatbot.css'

class ChatbotStart extends React.Component {
    constructor(props){
        super(props)
          this.state={       
            botTOopen: true, 
          };
        }
  
        onBotOpen = () => {
            (this.state.botTOopen)? this.setState({botTOopen: false}): this.setState({botTOopen: true});
          }

          render(){
            let bot = '';
            (this.state.botTOopen)? bot ='': bot= <Chatbot className='react-chatbot-kit-chat-container' config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>;
            
             return(
                <div> {/*chatbot*/}
                <div className='app-chatbot-container'>
                  {bot}
                </div>
                  <button onClick={this.onBotOpen} className='app-chatbot-button'>
                    <img 
                      alt='boticon' 
                      src={boticon}
                      className='app-chatbot-button-icon'
                    />
                  </button>
            </div>     
             );
          }
}

export default ChatbotStart;