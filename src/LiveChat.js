import { useState } from "react";
const LiveChat = () => {
  const [devMes, setDevMes]= useState(false)
  return (
    <div className="liveChat">
      <div className="messages">
        <div className="mes">
          <p>table 1: </p>
          <p>Yo</p>
        </div>
        <div className="mes">
          <p>table 5: </p>
          <p>has anyone seen a girl with eyeglasses?</p>
        </div>
        <div className="mes">
          <p>table 3: </p>
          <p>I dont sell drugs</p>
        </div>
        {devMes ? <div className="mes">
          <p>dev Miko: </p>
          <p>this feature is not ready yet, its close ...</p>
        </div> : null}
      </div>
      <div className="userInput">
        <input type="text"></input>
        <button onClick={() =>setDevMes(true)}>send</button>
      </div>
    </div>
  );
};
export default LiveChat;
