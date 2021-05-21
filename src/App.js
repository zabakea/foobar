import Order from "./Order";
import BeerPreview from "./BeerPreview";
import BeerList from "./BeerList";
import Guests from "./Guests";
import "./sass/main.scss";

function App() {
  return (
    <>
      <Guests />
      <div className="Main_Content">
        <BeerList />
        <BeerPreview />
      </div>
      <Order />
    </>
  );
}

export default App;
