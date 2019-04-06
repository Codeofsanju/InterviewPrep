// EXAMPLE OF ON ENTER FOCUS ON TO NEXT INPUT ELEMENT
// USING REFS

import React, { Component } from 'react';
import './App.css';


// USING REFS WITH FUNCTIONAL COMPONENTS
const FuncComponent = () => {
  let inputRef = null; // we must define in functional component
  const onClick = () => {
    alert(inputRef.value);
    inputRef.focus();
  }
  return(
    <div> 
      <div>
        <span>Functional Component Input</span>
        <input 
          type='text'
          ref={(input)=>{inputRef = input}}
        />
        <input 
          type='submit'
          value='submit'
          onClick={onClick}
        />
      </div>
    </div>
  )
}


class App extends Component {
  onClick = () =>{
    alert(`${this.firstName.value} ${this.lastName.value} ${this.age.value}` )
  }

  onKeyUp = (target, e) =>{
    if(e.keyCode === 13){ // key code for enter is 13
      switch(target){ // our target is setup as second param to bind
        case 'firstName' :
          this.lastName.focus();  // since we set up references to elements, we can easily focus on them!
          break;
        case 'lastName' :
          this.age.focus();
          break;
        case 'age' :
          this.submit.focus();
          break;
        default:
          this.firstName.focus();
      }
    }
  }
  render() {
    return (
      <div className="App">
        <FuncComponent/>
        <div>
          <span>First Name:</span>
          <input 
          type='text'
          ref={(input)=>{this.firstName = input}} // setting up reference to element
          onKeyUp={this.onKeyUp.bind(this, 'firstName')}/>
        </div>

        <div>
          <span>Last Name:</span>
          <input 
          type='text'
          ref={(input)=>{this.lastName = input}} // setting up reference to element 
          onKeyUp={this.onKeyUp.bind(this, 'lastName')}/>
        </div>

        <div>
          <span>Age:</span>
          <input 
          type='text'
          ref={(input)=>{this.age = input}} // setting up reference to element
          onKeyUp={this.onKeyUp.bind(this, 'age')}/>
        </div>       

        <div>
          <input 
          type='submit' 
          value='submit'
          onClick={this.onClick}
          ref={(input) => {this.submit = input}} // setting up reference to element
          onKeyUp={this.onKeyUp.bind(this, 'submit')}/>
        </div>  
      </div>
    );
  }
}

export default App;
