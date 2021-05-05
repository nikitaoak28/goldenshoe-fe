import React from 'react';
import './BotAvatar.css';

import boticon from './logo.svg'

const BotAvatar= () =>{
    return (
        <div className="bot-avatar">
        <img className='app-chatbot-button-icon'
        alt='boticon' 
        src={boticon}
       
      />
        </div>
        );
}

export default BotAvatar;