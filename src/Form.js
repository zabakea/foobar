// import { setState } from "react";

export function post(e) {
  e.preventDefault();

  //this function should post data to database
  const data = [
    { name: "Hoppily Ever After", amount: 1 },
    { name: "Row 26", amount: 2 },
  ];

  console.log("Post" + data);
}

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
    if (e.target.classList.contains("Card_Pay")) {
      console.log("card pay");
    } else {
      console.log("mobilepay");
    }
    handlePayment(index);
  }

  return (
    <>
      <form>
        <div className="Field">
          <label htmlFor="cardnumber">card number</label>
          <input type="text" id="cardnumber" title="cardname" minLength="16" maxLength="19" placeholder="1234 1234 1234 1234" onChange={insertSpaces}></input>
          <span className="Error_Cardnumber">Card number should be 16 digits long.</span>
        </div>
        <div className="Field">
          <label htmlFor="name">owner</label>
          <input type="text" id="name" title="name" placeholder="John Doe"></input>
        </div>
        <div className="groupRow">
          <div className="Field">
            <label htmlFor="expdate">exp date</label>
            <input type="text" id="expmonth" title="expdate" maxLength="5" placeholder="MM/YY" onChange={insertSlash}></input>
            <span className="Error_Month">Month should be 2 digits long.</span>
          </div>

          <div className="Field">
            <label htmlFor="cvc">cvc</label>
            <input type="text" id="cvc" title="cvc" placeholder="123" minLength="3" maxLength="3"></input>
            <span className="Error_CVC">CVC number should be 3 digits long. </span>
          </div>
          {/* <button className="method Card_Pay" onClick={manualValidate}> */}
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

// function manualValidate(e) {
//   e.preventDefault();
//   console.log("ManualValidate");
//   //this function works only at the first form. there is a problem with choosing right field for validity
//   if (
//     document.querySelector("#cardnumber").checkValidity() &&
//     document.querySelector("#name").checkValidity() &&
//     document.querySelector("#expmonth").checkValidity() &&
//     document.querySelector("#expyear").checkValidity() &&
//     document.querySelector("#cvc").checkValidity()
//   ) {
//     post(e);
//   } else {
//     console.log("validation went wrong");
//   }
// }
