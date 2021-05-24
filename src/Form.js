export default function Form() {
  return (
    <form>
      <div className="Field">
        <label for="cardnumber">card number</label>
        <input type="text" id="cardnumber" title="cardname" pattern="[0-9] {16}" placeholder="1234 1234 1234 1234"></input>
        <span className="Error_Cardnumber">Card number should be 16 digits long.</span>
      </div>

      <div className="Field">
        <label for="name">owner</label>
        <input type="text" id="name" title="name" placeholder="John Doe"></input>
      </div>

      <div className="Field">
        <label for="expdate">exp date</label>
        <input type="text" id="expmonth" title="expdate" pattern="[0-9] {2}" placeholder="MM"></input>
        <span className="Error_Month">Month should be 2 digits long.</span>
        <input type="text" id="expyear" title="expdate" pattern="[0-9] {4}" placeholder="YYYY"></input>
        <span className="Error_Year">Year should be 4 digits long.</span>
      </div>

      <div className="Field">
        <label for="cvc">cvc</label>
        <input type="text" id="cvc" title="cvc" pattern="[0-9] {3,4}" placeholder="123"></input>
        <span className="Error_CVC">CVC should be 3 or 4 digits long.</span>
      </div>

      <button type="submit" formNoValidate className="Card_Pay">
        pay
      </button>
    </form>
  );
}
