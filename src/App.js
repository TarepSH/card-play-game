import React, { Component } from 'react';
import './App.css';
import { ReactDOM } from 'react-dom';
import { copyFile } from 'fs';
import { longStackSupport } from 'q';
import { Socket } from 'net';


class GnreatCard extends React.Component{
  render(){
    return (
      <img src={require("./cards/" + this.props.number + ".png")} alt="fireSpot"/>
    );   
  }
}
  

export  class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      random: Math.floor(Math.random() * Math.floor(11)),
      Playerscore: 0, 
      plyaerwiner:0,
      score:0,
    };
    this.handleclike = this.handleclike.bind(this)
    this.state.Playerscore = this.state.random

  }

  handleclike(){

  }

  render(){
    return(
      <div className={"player" + this.props.plyarenumber}>
        <h3>Player {this.props.plyarenumber}</h3>
         <a href="#" onClick={this.handleclike}><GnreatCard number = {this.state.random} /></a> 
        <h3>plyaer socre is: {this.state.Playerscore}</h3>
        <CheckWiner  Playerscore = {this.state.Playerscore} plyarenumber={this.state.plyarenumber}/>
      </div>
    );
  }
}
 



class App extends Component {
  render() {
    return (
      <div className="App">
        <GameCardforAll />    
      </div>
    );
  }
}

export class CheckWiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      plyaerwiner:0,
      score:0,
    };
  }
  
    hacnlcheck(){
      if (this.props.Playerscore > this.state.score){
        this.setState({
          score : this.props.score,
          plyaerwiner : this.props.plyarenumber,
         })
      }
    }

    render() {
      return (
        <div>
         <a href="#" onClick={this.hacnlcheck}>clik me</a> 
             <h1>the winder is {this.state.plyaerwiner}</h1>
        </div>
      );
    }
  
  }




  export class GameCardforAll extends React.Component {
    constructor(props){
      super(props);
      this.state = { 
        
        playerOne: Array(5).fill().map(() => Math.floor(Math.random() * Math.floor(11))),
        playerTow: Array(5).fill().map(() => Math.floor(Math.random() * Math.floor(11))),
        playerThree: Array(5).fill().map(() => Math.floor(Math.random() * Math.floor(11))),
        playerForu: Array(5).fill().map(() => Math.floor(Math.random() * Math.floor(11))),

        playRound: [],
        winerplayer: 0,
        playerTurn: 1,
      };
      this.CheckplayRound = this.CheckplayRound.bind(this);

    }
    
    CheckplayRound(score){
      this.setState({
        playRound: this.state.playRound.concat(score)
        
      })

      if (this.state.playRound.length === 3) {
        this.setState({
          winerplayer: this.state.playRound.indexOf(Math.max(...this.state.playRound)) + 1,
          playRound:[]
        })
      }
        if (this.state.playerTurn === 1) {
          this.setState({
          playerTurn: 2
          })
        } else if (this.state.playerTurn === 2){
          this.setState({
            playerTurn: 3
            })
        } else if (this.state.playerTurn === 3){
          this.setState({
            playerTurn: 4
            })
        } else if (this.state.playerTurn === 4){
          this.setState({
            playerTurn: 0
            })
        }
      
    }

    render() {
      return (
        <div>
          <div className="player1">
          <h1>
            Player turn is : {this.state.playerTurn} <br/>
              the Winerplayer is {this.state.winerplayer}
          </h1>
          <p>player 1</p>
           {this.state.playerOne.map((card,index) =>
            <a href={"#" + card} onClick={() => this.CheckplayRound(card)}> 
            <img src={require("./cards/" + card + ".png")}/>
            </a>
           )}   
          </div>  
          <div className="player2">
          <p>player 2</p>
          {this.state.playerOne.map((card,index) =>
            <a href={"#" + card} onClick={() => this.CheckplayRound(card)}> 
            <img src={require("./cards/" + card + ".png")}/>
            </a>
           )}   
          </div>   
          <div className="player3">
          <p>player 3</p>
          {this.state.playerOne.map((card,index) =>
            <a href={"#" + card} onClick={() => this.CheckplayRound(card)}> 
            <img src={require("./cards/" + card + ".png")}/>
            </a>
           )}   
          </div>   
          <div className="player4">
          <p>player 4</p>
          {this.state.playerOne.map((card,index) =>
            <a href={"#" + card} onClick={() => this.CheckplayRound(card)}> 
            <img src={require("./cards/" + card + ".png")}/>
            </a>
           )}   
          </div>        
     
        </div>
        );
    }
  
    }

    
export default App;
