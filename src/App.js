import React, { Component } from 'react';
import './App.css';
import { ReactDOM } from 'react-dom';


class GnreatCard extends React.Component{
  render(){
    return (
      <img src={require("./cards/" + this.props.number + ".png")} alt="fireSpot"/>
    );   
  }
}
  

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      random: Math.floor(Math.random() * Math.floor(11)),
      Playerscore: 0, 
      
      
    };
  }

  render(){
    let winer = "test"
    return(
      <div className={"player" + this.props.plyarenumber}>
        <h3>Player {this.props.plyarenumber}</h3>
         <a href="#" onClick={() => this.setState({Playerscore: this.state.random})}><GnreatCard number = {this.state.random} /></a> 
        <h3>plyaer socre is: {this.state.Playerscore}</h3>
      </div>
    );
  }
}
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>the winner is: {this.props.winer} </h1>
        <Player plyarenumber="1" />
        <Player plyarenumber="2" />
        <Player plyarenumber="3" />
        <Player plyarenumber="4" />        
      </div>
    );
  }
}

export default App;
