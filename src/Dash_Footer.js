import Images from "../src/images/index";

const Dash_Footer = () => {
  return (
    <div className="Dash_Footer">
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[5]]} />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[6]]} />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[7]]} />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[8]]} />
      </div>
      <div className="Image_Box">
        <img src={Images[Object.keys(Images)[9]]} />
      </div>
    </div>
  );
};

export default Dash_Footer;
