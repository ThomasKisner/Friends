import React, { Component } from "react";
import "./App.css";
import FriendDisplay from "./Components/FriendDisplay";
import axios from "axios";
import FriendInput from "./Components/FriendForm";


class App extends Component {
  constructor() {
    super();
    this.state = {
      friendList: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({ friendList: response.data });
      })
      .catch(err => console.log(err));
  }

  handleInput = (event) =>{
    this.setState({[event.target.name]:event.target.value})
    console.log(event.target.name + event.target.value) 
}

postIt = (event) =>{
    axios.post(`http://localhost:5000/friends`, {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
  })
  .then(response=>{
    console.log(response)
  })
  .catch(err=> console.log(err))    
}

deleteIt = (friendId) => {
  axios.delete(`http://localhost:5000/${friendId}`)
  .then(response => {this.setState({friendId: response.data})
  })
  .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
        <FriendInput handleInput={this.handleInput} postIt={this.postIt}/>
        <FriendDisplay friends={this.state.friendList} deleteIt={this.deleteIt}  />   
      </div>
    );
  }
}

export default App;
