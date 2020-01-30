import React, { Component } from 'react';
import Countdown from './Countdown.js';
import logo from './logo.jpeg';
import github from './github.png';
import axios from 'axios';
import CardComponent from './CardComponent.js';

import MainComponent from "./MainStoryline.js";
import SideQuestsComponent from "./SideQuests.js";
import CertsComponent from "./CertsComponent.js";

// import dotenv from 'dotenv';

// require('dotenv').config();

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
          contents: []
        }
        this.getContents = this.getContents.bind(this)
}
  componentDidMount(){
    this.getContents()

}

getInitialState(){
    return {
      contents: []
    }
  }

  getContents(){

    const API_KEY = process.env.REACT_APP_NASA_API_TOKEN
    const END_POINT = "https://api.nasa.gov/planetary/apod?api_key="

axios.get(END_POINT + API_KEY).
      then(res=>{ 
        if(res.data){ 
          this.setState({ 
            contents: res.data
            //htmlcontents: atob(res.data.content)
            })
 
       
        
      }})
    
    .catch(err => console.log(err)) 
  }

  render() {

{/*const divStyle = {backgroundImage: 'url(' + this.contents.url + ')'*/}
  var divStyle = {
    backgroundImage: `url( ${this.state.contents.url} )`

  }


    return (

      <div className="App">
        
        <div className="App-header" style={divStyle}>
          <img src={logo} className="App-logo" alt="logo" />
 
	<ul className="designer">
	<li >
         <a  href ="https://api.nasa.gov/index.html" target="_blank">
          <img className="smallPin" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"/>
          <a href="https://api.nasa.gov/index.html"><span>NASA Picture of The Day: {this.state.contents.title}, Public API</span></a>

         </a></li>
<li>
          <a href="https://github.com/kristinbaumann/react-countdown" target="_blank">
            <img src={github} className="smallPin" alt="github" />
            <span>Forked from Kristin Baumann</span>
          </a></li>

	</ul>
        </div>


          <div className="AtomicClock">
		<h2>Welcome to Code For San Jose, a Branch of Code For America</h2>
		<h3>Start Time: 6:45pm </h3>
		<h3>End Time: 8:45pm </h3>
          	<h2>		<Countdown date={`2020-01-23T20:45:00`} /></h2>



         </div>

     
     
      </div>
    );
  }
}

export default App;
