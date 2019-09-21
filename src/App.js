import React, { Component } from 'react';
import Countdown from './Countdown.js';
import logo from './logo.svg';
import github from './github.png';
import axios from 'axios';


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

    const API_KEY = "7SKeiMfL3iPksCFzCdFs0edpYafQZl6hkl1tOoi6"
    const END_POINT = "https://api.nasa.gov/planetary/apod?api_key="

axios.get(END_POINT + API_KEY).
      then(res=>{ 
        if(res.data){ 
          this.setState({ 
            contents: res.data
            //htmlcontents: atob(res.data.content)
            })
          console.log(this.state.contents.url)
 
       
        
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
          <h2>Countdown to Ames</h2>


         <a className = "designer">
          <img className="smallPin" src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"/>
          <a href="https://api.nasa.gov/index.html"><span>NASA Picture of The Day: {this.state.contents.title}, courtesy of the NASA Public API</span></a>

         </a>

          <a className="designer" href="https://github.com/kristinbaumann/react-countdown" target="_blank">
            <img src={github} alt="github" className="githubIcon" />
            <span>Forked from Kristin Baumann</span>
          </a>
        </div>


          <div className="AtomicClock">
            <h3 className="title">September 2020, don't be late at the docking port</h3>
            <Countdown date={`2020-09-18T00:00:00`} />

         </div>

     
     
      </div>
    );
  }
}

export default App;
