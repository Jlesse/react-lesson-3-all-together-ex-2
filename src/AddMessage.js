import React, {Component} from 'react';

class AddMessage extends Component{
  state = {
    text: ""
  };

  isDisabled = () => {
    return this.state.text === '';
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState(() => ({
      text: value
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onMessageAdd(this.state.text)
  };

  render(){
    return(
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input type="text" 
                 className="form-control" 
                 placeholder="Enter your message..."
                 value={this.state.text}
                 onChange={this.handleInputChange}/>
          <div className="input-group-append">
            <button className="btn submit-button" disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddMessage;