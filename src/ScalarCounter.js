import React, { Component } from 'react';

export default class ScalarCounter extends Component {
  
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
 
  handleSubtract = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    console.log(`Current State: ${this.state.count}`)    
    return (
      <div>
        <h1>React Scalar Counter</h1>
        Count: {this.state.count}
        <br />
        <button onClick={this.handleAdd}>
          +
        </button>
        <button onClick={this.handleSubtract}>
          -
        </button>
        <hr />
        <h3>Press <kbd id="shortcut" className="shortcut">⌘⌥J</kbd> to open Developer Tools.</h3>
      </div>
    )
  }
}

