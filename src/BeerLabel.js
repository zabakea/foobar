import ButtonPlus from "./ButtonPlus";
import ButtonMinus from "./ButtonMinus";
import BeerLabelImg from "./BeerLabelImg";

export default function BeerLabel() {
  return (
    <div className="Beer_Label">
      <ButtonMinus />
      <BeerLabelImg />
      <ButtonPlus />
    </div>
  );
}
