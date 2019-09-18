import React from 'react';
import './App.css';
import Nav from './components/nav'
import './resumepage.css'
import Profile from './components/profile'
import Education from './education';
import Contactus from './components/contactus';

function App() {
 
  const style = {
    color: "white",
    backgroundColor: "#473687",
    textAlign: "center",
    fontSize: "200%",
    height: "150px",
    margin: "auto",
    paddingTop: "40px",
  }

  const myStyle = {
    width: "400px",
    paddingLeft: "40px",
    marginTop: "0px"
  }
  
  // const formStyle = {
  //   position: "relative",
  //   bottom: "200px",
  //   marginBottom: "100px"
  // }


  return (
    <div id="container">
      <Nav style={style} />
      <div className="leftbox">
        <Profile mystyle={myStyle}/>

      </div>
      <div className="rightbox">
        <Education mystyle={myStyle} />
        
      </div >
      <div className="contact">
        <Contactus />
      </div>
      
    </div>
  );
}

export default App;
