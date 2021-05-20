import "./sass/main.scss";

function App() {
  return (
    <>
      <div className="guests">
        <div className="guest_container">
          <div className="GuestHeader">
            <div className="BasketContainer">
              <p>Add Beers</p>
            </div>
            <div class="BasketTotal">
              <p className="GuestNumber">Guest 1</p>
              <p>60,-</p>
            </div>
          </div>
          <div className="GuestForm">
            <form>
              <div className="Field">
                <label for="cardnumber">card number</label>
                <input type="text" id="cardnumber" title="cardname"></input>
              </div>

              <div className="Field">
                <label for="name">owner</label>
                <input type="text" id="name" title="name"></input>
              </div>

              <div className="Field">
                <label for="expdate">exp date</label>
                <input type="text" id="expmonth" title="expdate"></input>
                <input type="text" id="expyear" title="expdate"></input>
              </div>

              <div className="Field">
                <label for="cvc">cvc</label>
                <input type="text" id="name" title="cvc"></input>
              </div>

              <button className="CardPay">pay</button>
            </form>
            <p>Or</p>
            <button className="MobilePay">MobilePay</button>
          </div>
        </div>
        <div className="guest_container">Guest 1</div>
        <div className="guest_container">Guest 1</div>
        <div className="guest_container">Guest 1</div>
        <div className="guest_container">Guest 1</div>
      </div>

      <div className="Beer_list">
        <ul>
          <li>Beer 1</li>
          <li>Beer 1</li>
          <li>Beer 1</li>
          <li>Beer 1</li>
          <li>Beer 1</li>
          <li>Beer 1</li>
          <li>Beer 1</li>
          <li>Beer 1</li>
          <li>Beer 1</li>
          <li>Beer 1</li>
          <li>Beer 1</li>
        </ul>
      </div>

      <div className="Beer_preview">
        <div className="Beer_label">
          <button className="Plus"></button>
          <img src="" alt="none"></img>
          <button className="Minus"></button>
        </div>
        <div className="Beer_desc">
          <h1>Header</h1>
          <div className="Extra_Info">
            <p className="Alc">Alc</p>
            <p className="Category">Category</p>
            <p className="Price">Price</p>
          </div>
          <p className="Aroma">Aroma</p>
          <p className="Appearance">Appearance</p>
          <p className="Flavor">Flavor</p>
          <p className="Mouthfeel">Mouthfeel</p>
          <p className="Impression">Impression</p>
        </div>
      </div>

      <div className="Order">
        <div className="PlaceOrder">
          <button className="PlaceOrderButton">Place Order</button>
        </div>

        <div className="Queue">
          <p>
            <span className="QueuePlace">X</span> in queue
          </p>
          <p>
            ID: <span className="UserID">X</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
