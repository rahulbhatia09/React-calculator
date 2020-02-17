import React, { Component } from 'react';
import './App.css';
import ResultComponents from './components/ResultComponents';
import KeypadComponent from "./components/KeypadComponent";

class App extends Component {
  constructor(){
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if(button === "="){
      this.calculate()
    }

    else if(button === "C"){
      this.reset()
    }
    else if(button === "CE"){
      this.backspace()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };


  calculate = () => {
    let checkResult = ''
    if(this.state.result.includes('--')){
      checkResult = this.state.result.replace('--','+')
    }

    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "" ) + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };

  render() {
    return (
        <div>
          <div className="calculator-body" alignItems= 'center'>
            <h1>Let's Calculate</h1>
            <ResultComponents result={this.state.result}/>
            <KeypadComponent onClick={this.onClick}/>
          </div>
        </div>
    );
  }
}

export default App;