import React, { Component } from "react";

// LAB 8: eventexamplesapp - Counter
// Objective: Event handlers, use of `this`, calling multiple methods from one handler
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // Binding `this` so it refers to the component inside the handlers
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  sayHello() {
    console.log("Hello, this is a static message from the Counter component!");
  }

  // Increment button calls both increment() and sayHello()
  handleIncrementClick() {
    this.increment();
    this.sayHello();
  }

  // Function taking an argument, called from "Say Welcome" button
  sayWelcome(message) {
    alert(message);
  }

  render() {
    return (
      <div>
        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br />
        <button onClick={() => this.sayWelcome("welcome")}>Say Welcome</button>
      </div>
    );
  }
}

export default Counter;
