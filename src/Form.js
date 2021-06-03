// import { setState } from "react";

<<<<<<< HEAD
export function post(e) {
  e.preventDefault();

  //this function should post data to database
  const data = [
    { name: "Hoppily Ever After", amount: 1 },
    { name: "Row 26", amount: 2 },
  ];

  console.log("Post" + data);
}

=======
>>>>>>> f14e4df9c3f8806590cb74579c56ce6953ecd428
const Form = ({ handlePayment, index }) => {
  function insertSpaces(e) {
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }
  function insertSlash(e) {
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{2})/, "$1/")
      .trim();
  }

  function paying(e) {
    e.preventDefault();
    handlePayment(index);
  }

  return (
    <>
      <form>
        <div className="Field">
          <label htmlFor="cardnumber">card number</label>
          <input type="text" id="cardnumber" title="cardname" minLength="19" maxLength="19" placeholder="1234 1234 1234 1234" onChange={insertSpaces}></input>
          <span className="Error_Cardnumber">must be 16 digits</span>
        </div>
        <div className="Field">
          <label htmlFor="name">owner</label>
          <input type="text" id="name" title="name" placeholder="John Doe"></input>
        </div>
        <div className="groupRow">
          <div className="Field">
            <label htmlFor="expdate">exp date</label>
            <input type="text" id="expmonth" title="expdate" maxLength="5" placeholder="MM/YY" onChange={insertSlash}></input>
            <span className="Error_Date">card has expired</span>
          </div>

          <div className="Field">
            <label htmlFor="cvc">cvc</label>
            <input type="text" id="cvc" title="cvc" placeholder="123" minLength="3" maxLength="3"></input>
            <span className="Error_CVC">input 3 digits</span>
          </div>
          <button className="method Card_Pay" onClick={paying}>
            pay
          </button>
        </div>
      </form>
      <p id="or">or</p>
      <button className="method MobilePay" onClick={paying}></button>
    </>
  );
};

export default Form;
