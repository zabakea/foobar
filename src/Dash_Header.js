import Images from "./images/index";

const Dash_Header = () => {
  return (
    <div className="Dash_Header">
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[0]]} />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[1]]} />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[2]]} />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[3]]} />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[4]]} />
      </div>
    </div>
  );
};

export default Dash_Header;
