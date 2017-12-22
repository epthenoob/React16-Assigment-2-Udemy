import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';

class App extends Component {
  
  state = {
    charValue:'',
    textLength:0
  }

  lengthCheckHandler = (event) => {   
    // console.log(event.target.value.length);
    this.setState({
      charValue:event.target.value,
      textLength:event.target.value.length
    })
  };

  deleteListHandler = (index) => {
    const text = this.state.charValue.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({charValue:updatedText});
  };

  render() {

    const style = {      
      display:'inline-block',
      padding:'16px',
      textAlign:'center',
      margin:'16px',
      border:'1px solid black'
    };

    const charList = this.state.charValue.split('').map((ch, index)=>{
      // console.log(ch);
      return (<Char 
        cssStyle = {style} 
        character = {ch}
        key = {index}
        whenClick = {this.deleteListHandler.bind(this, index)}
      />)
    });

    return (
      <div className = "App">
        <h1>Assigment 2</h1>
        <input type = "text" 
          onChange = {this.lengthCheckHandler.bind(this)}
          value = {this.state.charValue}
        />
        <Validation textLength = {this.state.textLength}/>
        {charList}

      </div>
    );
  }
}

export default App;
