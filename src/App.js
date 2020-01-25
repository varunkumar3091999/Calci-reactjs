import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import Calci from './containers/Calci'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.aValue = React.createRef()
    this.bValue = React.createRef()
    this.state = {
      result: 0
    }
  }
  addition = (e) => {
    e.preventDefault()
    var a = this.aValue.current.value
    var b = this.bValue.current.value
    this.setState({
      result: (a + b)
    })
  }

  subtraction = (e) => {
    e.preventDefault()
    var a = this.aValue.current.value
    var b = this.bValue.current.value
    this.setState({
      result: (a - b)
    })
  }

  multiplication = (e) => {
    e.preventDefault()
    var a = this.aValue.current.value
    var b = this.bValue.current.value
    this.setState({
      result: (a * b)
    })
  }

  division = (e) => {
    e.preventDefault()
    var a = this.aValue.current.value
    var b = this.bValue.current.value
    this.setState({
      result: (a / b)
    })
  }

  render() {
    return (
      <div>
        <form>
          <h1>Calculator</h1>
          <h2>Enter first value</h2>
          <input type="number" ref={this.aValue} required />
          <h2>Enter second value</h2>
          <input type="number" ref={this.bValue} required />
          <button onClick={this.addition}>addition</button>
          <button onClick={this.subtraction}>subtraction</button>
          <button onClick={this.multiplication}>multiplication</button>
          <button onClick={this.division}>division</button>
          <h1>{this.state.result}</h1>
        </form>
      </div>
    );
  }
}

export default App;
