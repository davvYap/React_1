import { Component } from "react";

class Message extends Component {
  render() {
    return (
      <h3>
        This is a class component. {this.props.messageContent} - {this.props.id}
      </h3>
    );
  }
}

export default Message;
