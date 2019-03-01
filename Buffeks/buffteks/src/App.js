import React, { Component } from 'react';
import './App.css';
import MyForm from './components/MyForm';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      childvalue: '',
    };

    this.valueFromChildHandler = this.valueFromChildHandler.bind(this);
  }

  valueFromChildHandler(val)
  {
    const childvalue = val;
    
    this.setState(() => {
        return {
          childvalue
        }
      }
    );
  }
  render() {
    return (
      <div className="container">
        <MyForm name = "Greg"
                getValueFromChild = {this.valueFromChildHandler} />
        <p>{this.state.childvalue}   {this.props.name} </p>
      </div>
    );
  }
}

export default App;
