import React, { Component } from "react";

const RUPEE_TO_EURO_RATE = 0.011; // approximate conversion rate

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euros: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const euros = (parseFloat(this.state.rupees) || 0) * RUPEE_TO_EURO_RATE;
    this.setState({ euros: euros.toFixed(2) });
  }

  render() {
    return (
      <div>
        <h3>Currency Convertor (INR to EUR)</h3>
        <input
          type="number"
          placeholder="Enter amount in ₹"
          value={this.state.rupees}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Convert</button>
        {this.state.euros !== null && (
          <p>
            ₹{this.state.rupees} = €{this.state.euros}
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
