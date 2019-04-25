import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ImagesContainer from "./components/ImagesContainer";
import Footer from "./components/Footer";



class App extends Component {
  // We set the variables that change during the game as states
  state = {
    score : 0,
    topScore: 0,
    idsSelected: [],
    message: "Start Clicking!!"
  }
  
  //Function for when user clicks on any image
  handleImageClick = event => {
    
    //Variable that holds ID of the clicked image
    const imageID = event.target.id;

    //Conditional for when user clicks on the same image more than once
    //If the arrays of clicked images includes the last image clicked id...
    if(this.state.idsSelected.includes(imageID)) {
      //..the user loose, so set the score to 0 again and empty the ID array
      this.setState({
        score: 0, 
        idsSelected: [],
        message: "Oops! Library already chosen...",
      });

    } else {
      //If the user clicks on an image for the first time, that ID is saved on the arrays of images ID
      this.state.idsSelected.push(imageID);

      //We have to update the score and the high score, we run a conditional
      //Whenever the high score is lower than actual score, set the high score to new score
      if(this.state.topScore <= this.state.score) {
        this.setState({
          topScore: this.state.score + 1,
          message: "Library never selected!",
          score: this.state.score + 1
        })
      } else {
        //If high score is greater than the new score, keep the high score while updating the new score
        this.setState({
          message: "Library never selected!",
          score: this.state.score + 1
        })
      }
    }
  }
  
  render() {
    return (
      <div>
        {/* We pass the message, score and high score to the Nav component while playing */}
        <Navbar message={this.state.message} score={this.state.score} topScore={this.state.topScore}/>
        <Header />
        {/* We pass the click function to the Images container */}
        <ImagesContainer handleImageClick={this.handleImageClick}/>
        <Footer />
      </div>
    );
  }
 
}

export default App;
