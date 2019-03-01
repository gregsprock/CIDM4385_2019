import React, { Component } from 'react';

class MyForm extends Component {
  constructor(props){
        super(props);
  }

  componentDidMount(){
    this.props.getValueFromChild("Hello from child");
  }

  render(){
    return(
      <div>
        {this.props.name}
      </div>
    );
  }  
}

export default MyForm;