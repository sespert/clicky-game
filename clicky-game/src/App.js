import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ImagesContainer from "./components/ImagesContainer";


class App extends Component {
  state = {
    score : 0,
    idTemp: []
  }

  handleImageClick = event => {
    
    const imageID = event.target.id;

    if(this.state.idTemp.includes(imageID)) {
      this.setState({score: 0})
    } else {
      this.state.idTemp.push(imageID)
      this.setState({
        score: this.state.score + 1
      })
    }

    // if(imageID == this.state.idTemp) {
    //   this.setState({score: 0})
    // } else {
    //   this.setState({
    //     idTemp : imageID,
    //     score: this.state.score + 1
    //   })
    // }
    alert("idTEMP " + this.state.idTemp);
    alert("score " + this.state.score);

  }
  
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <ImagesContainer handleImageClick={this.handleImageClick}/>
      </div>
    );
  }
 
}

export default App;
