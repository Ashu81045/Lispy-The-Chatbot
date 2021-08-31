import React from 'react';
import logo from './logo.svg';
import './App.css';
import ChatBotRobot from './Chatbot.compoenent';

function App() {
  return (
    <span>
      <ChatBotRobot />
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
             MY CHATBOT
        </p>
        </header>
      </div>
    </span>
  );
}

export default App;
