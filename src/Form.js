export default function Form() {
  return (
    <form>
      <div className="Field">
        <label for="cardnumber">card number</label>
        <input type="text" id="cardnumber" title="cardname" minlength="16" maxlength="16" placeholder="1234 1234 1234 1234"></input>
      </div>

      <div className="Field">
        <label for="name">owner</label>
        <input type="text" id="name" title="name" placeholder="John Doe"></input>
      </div>

      <div className="Field">
        <label for="expdate">exp date</label>
        <input type="text" id="expmonth" title="expdate" maxlength="2" placeholder="MM"></input>
        <input type="text" id="expyear" title="expdate" maxlength="4" placeholder="YYYY"></input>
      </div>

      <div className="Field">
        <label for="cvc">cvc</label>
        <input type="text" id="name" title="cvc" minlength="3" maxlength="4" placeholder="123"></input>
      </div>

      <button className="Card_Pay">pay</button>
    </form>
  );
}
