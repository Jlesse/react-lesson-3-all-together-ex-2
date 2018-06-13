import React, { Component } from 'react';
import logo from './logo.svg';
import ChatWindow from './ChatWindow.js'
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const initUsers = [{ username: 'Amy' }, { username: 'John' }];

const initMessages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {
  state = {
    users: initUsers,
    messages: initMessages
  }

  handleMessageAdd = (text, user) => {
    this.setState((prevState) => ({
      messages: [...prevState.messages, {username: user.username, text: text}]
    }))
  }

  render() {
    const {messages, users} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow users={users} messages={messages} user={users[0]} handleMessageAdd={this.handleMessageAdd}/>
          <ChatWindow users={users} messages={messages} user={users[1]} handleMessageAdd={this.handleMessageAdd}/>
        </div>
      </div>
    );
  }
}

export default App;
