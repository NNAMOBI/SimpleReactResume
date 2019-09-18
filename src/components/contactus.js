import React, { Component } from 'react'
import Button from "react-bootstrap/Button"
import Axios from 'axios'

class Contactus extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    submitHandler = (e) => {
        e.preventDefault()  
        console.log(this.state)
        Axios.post("http://locahost:5600/contactus", this.state)
            
            .then((response) => {

                console.log(response)
                if (response) {
                    alert("data saved")
                } else {
                    alert("Invalid")
                }
            
            })

            .catch((error) => {
            console.log(error)
        })
    }

    changeEventHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        
    }
    
    render() {
        return (
            <div id="formcontainer" >
                <h2 style={{textAlign: "center"}}>Contact Us</h2>
                <form onSubmit={this.submitHandler}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1"
                            placeholder="Enter your name" required onChange={this.changeEventHandler}
                            value={this.state.name} name="name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="Enter your name" required onChange={this.changeEventHandler}
                            value={this.state.email} name="email" />
                    </div>
                        
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                            onChange={this.changeEventHandler} name="message" value={this.state.message}></textarea>
                        </div>

                        <Button variant="primary" size="lg" block type="submit" >
                            Send Message
    </Button>

</form>

                        
                   
                    





               
    </div>
        )
    }
}

export default Contactus;
