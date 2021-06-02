const LiveChat = () => {
  return (
    <div className="liveChat">
      <div className="messages">
        <div className="mes">
          <p>table 1: </p>
          <p>Yo</p>
        </div>
        <div className="mes">
          <p>table 2: </p>
          <p>fuck you ,|,,</p>
        </div>
        <div className="mes">
          <p>table 5: </p>
          <p>have you seen a girl with glasses?</p>
        </div>
        <div className="mes">
          <p>table 3: </p>
          <p>drugs sb?</p>
        </div>
      </div>
      <div className="userInput">
        <input type="text"></input>
        <button>send</button>
      </div>
    </div>
  );
};
export default LiveChat;
