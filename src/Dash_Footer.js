import Images from "../src/images/index";

const DashFooter = () => {
  return (
    <div className="Dash_Footer">
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[5]]} alt="" />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[6]]} alt="" />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[7]]} alt="" />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[8]]} alt="" />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[9]]} alt="" />
      </div>
    </div>
  );
};

export default DashFooter;
