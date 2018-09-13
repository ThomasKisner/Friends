import React from "react";

const FriendInput = props => {

    return (
      <form>
        <input type="text" placeholder="Name" name='name' onChange={props.handleInput}/>
        <input type="text" placeholder="Age" name='age' onChange={props.handleInput}/>
        <input type="text" placeholder="Email" name='email' onChange={props.handleInput}/>
        <button onClick={props.deleteIt} >Submit</button>
      </form>
    );
  }


export default FriendInput;
