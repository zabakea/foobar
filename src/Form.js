export default function Form() {
  return (
    <form>
      <div className="Field">
        <label htmlFor="cardnumber">card number</label>
        <input type="text" id="cardnumber" title="cardname" placeholder="1234 1234 1234 1234"></input>
      </div>

      <div className="Field">
        <label htmlFor="name">owner</label>
        <input type="text" id="name" title="name" placeholder="John Doe"></input>
      </div>

      <div className="Field">
        <label htmlFor="expdate">exp date</label>
        <input type="text" id="expmonth" title="expdate" placeholder="MM"></input>
        <input type="text" id="expyear" title="expdate" placeholder="YYYY"></input>
      </div>

      <div className="Field">
        <label htmlFor="cvc">cvc</label>
        <input type="text" id="name" title="cvc" placeholder="123"></input>
      </div>

      <button className="Card_Pay">pay</button>
    </form>
  );
}
