import Images from "./images/index";

const DashHeader = () => {
  return (
    <div className="Dash_Header">
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[0]]} alt="" />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[1]]} alt="" />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[2]]} alt="" />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[3]]} alt="" />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[4]]} alt="" />
      </div>
    </div>
  );
};

export default DashHeader;
