import './App.css'
import React, { Component } from 'react';
import Tampilan1 from './Tampilan1';
import Tampilan2 from './Tampilan2';
import Tampilan3 from './Tampilan3';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Tampilan1></Tampilan1>
        <Tampilan2></Tampilan2>
        <Tampilan3></Tampilan3>
      </div>
      
    );
  }
}
 
export default App;