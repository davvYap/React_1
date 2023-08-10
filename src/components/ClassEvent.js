import { Component } from "react";

class ClassEvent extends Component {
  handleClick = () => {
    console.log("class event click");
  };

  render() {
    return (
      <div>
        This is a class event. <br />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default ClassEvent;
