import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      value: this.state.value + 1,
    });
  }

  decrement() {
    this.setState({
      value: this.state.value - 1,
    });
  }

  render() {
    return (
      <div>
        <h3>Count Value : {this.state.value}</h3>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={() => this.decrement()}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
