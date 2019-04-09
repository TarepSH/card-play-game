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
    this.handleClick = this.handleClick.bind(this);
    this.state = { random: 0 };
  }


  handleClick() {
    const min = Math.ceil(1);
    const max = Math.floor(3);
    const rand = Math.floor(Math.random() * (max - min)) + min ;
    this.setState({ random: this.state.random + rand });
  }

  
  render(){
    return(
      <div className={"player" + this.props.plyarenumber}>
        <h3>Player {this.props.plyarenumber}</h3>
        <button onClick={this.handleClick.bind(this)}>Start</button> 
         <a href="#"><GnreatCard number = {this.state.random} /></a> 
      </div>
    );
  }
}
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Player plyarenumber="1" />
        <Player plyarenumber="2" />
        <Player plyarenumber="3" />
        <Player plyarenumber="4" />
      </div>
    );
  }
}

export default App;
