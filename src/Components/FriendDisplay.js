import React, { Fragment } from "react";
import Friend from "./Friends";

const FriendDisplay = props => {
  return (
    <Fragment>
      {props.friends.map(friend => {
        return (
          <div key={friend.id}>
            <Friend friend={friend} deleteIt={props.deleteIt} />
          </div>
        );
      })}
    </Fragment>
  );
};

export default FriendDisplay;
