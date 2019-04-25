import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ImagesContainer from "./components/ImagesContainer";


class App extends Component {
  
  state = {
    score : 0,
    topScore: 0,
    idTemp: [],
    message: "Start Clicking!!"
  }
  
  handleImageClick = event => {
    
    const imageID = event.target.id;

    if(this.state.idTemp.includes(imageID)) {
      
      this.setState({
        score: 0, 
        idTemp: [],
        message: "Oops! Library already chosen...",
      });
      console.log("lost array " + this.state.idTemp);
      console.log("lost score " + this.state.score);
    } else {

      this.state.idTemp.push(imageID);

      if(this.state.topScore <= this.state.score) {
        this.setState({
          topScore: this.state.score + 1,
          message: "Library never selected!",
          score: this.state.score + 1
        })
      } else {
        this.setState({
          message: "Library never selected!",
          score: this.state.score + 1
        })
      }
      
      console.log("array " + this.state.idTemp)
      console.log("score " + this.state.score)
    }
   

  }
  
  render() {
    return (
      <div>
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        <ImagesContainer handleImageClick={this.handleImageClick}/>
      </div>
    );
  }
 
}

export default App;
