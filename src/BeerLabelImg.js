import elhefe from "./images/githop.png";

export default function BeerLabelImg() {
  return (
    <div className="Image_Container">
      <img src={elhefe} alt="none"></img>
      <div className="Amount_Block">
        <span className="Animated_Amount">3</span>
      </div>
    </div >
  );
}
