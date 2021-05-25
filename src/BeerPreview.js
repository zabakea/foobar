import ButtonPlus from "./ButtonPlus";
import ButtonMinus from "./ButtonMinus";
import elhefe from "./images/githop.png";
// import { useState } from "react";

const BeerPreview = ({ beers, prices, details, focus }) => {
  // console.log(beers, prices, details, focus);
  // const focusedBeer = beers[focus].beer;
  // const beerDetails = details.find((el) => el.name === focusedBeer);
  // console.log(beers, prices, details, focus);
  // console.log(beerDetails);

  return (
    <div className="Beer_Preview">
      <div className="Beer_Label">
        <ButtonMinus />
        <div className="Image_Container">
          <img src={elhefe} alt="none"></img>
          <div className="Amount_Block">
            <span className="Animated_Amount">3</span>
          </div>
        </div>
        <ButtonPlus />
      </div>
      <div className="Beer_Desc">
        <h1>Header</h1>
        <div className="Extra_Info">
          <p className="Alc">Alc</p>
          <p className="Category">Category</p>
          <p className="Price">Price</p>
        </div>
        <div className="TextDesc">
          <p className="Aroma">
            <b>Aroma: </b>
            <span className="Aroma_API">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
            </span>
          </p>
          <p className="Appearance">
            <b>Appearance: </b>
            <span className="Appearance_API">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
            </span>
          </p>
          <p className="Flavor">
            <b>Flavor: </b>
            <span className="Flavor_API">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
            </span>
          </p>
          <p className="Mouthfeel">
            <b>Mouthfeel: </b>
            <span className="Mouthfeel_API">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
            </span>
          </p>
          <p className="Impression">
            <b>Impression: </b>
            <span className="Impression_API">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeerPreview;
