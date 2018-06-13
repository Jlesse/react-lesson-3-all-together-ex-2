import React, {Component} from 'react';
import MessageList from './MessageList';
import AddMessage from './AddMessage';

class ChatWindow extends Component{
  handleMessageAdd = (text) => {
    this.props.handleMessageAdd(text, this.props.user);
  }

  render(){
    const {user, messages} = this.props
    return(
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <MessageList user={user} messages={messages}/>
        <AddMessage onMessageAdd={this.handleMessageAdd}/>
      </div>
    )
  }
}

export default ChatWindow