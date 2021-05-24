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

        <label for="expdate">exp date</label>
        <input type="text" id="expmonth" title="expdate" pattern="[0-9] {2}" placeholder="MM"></input>
        <span className="Error_Month">Month should be 2 digits long.</span>
        <input type="text" id="expyear" title="expdate" pattern="[0-9] {4}" placeholder="YYYY"></input>
        <span className="Error_Year">Year should be 4 digits long.. </span>
      </div>

      <div className="Field">
        <label htmlFor="cvc">cvc</label>
        <input type="text" id="name" title="cvc" placeholder="123"></input>
      </div>

      <button type="submit" formNoValidate className="Card_Pay">
        pay
      </button>
    </form>
  );
}
