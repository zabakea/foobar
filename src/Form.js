

export default function Form() {
    return (
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

            <button className="Card_Pay">pay</button>
        </form>

    )

}