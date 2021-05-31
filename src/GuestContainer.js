import Form from "./Form";

const GuestContainer = ({ index, focusing, guest, basket, onClick, formFocus, form }) => {
  // console.log(basket);
  // console.log(basket.length === 0 ? "true" : "false");
  function summing(basket) {
    let result = 0;
    basket.forEach((beer) => {
      result += beer.amount * beer.price;
    });
    return result;
  }
  return (
    <div className={`Guest_Container ${Number(guest) === index ? "focus" : ""}`}>
      <div className="Basket_Container">
        {basket.length > 0 ? (
          basket.map((e, conInd) => {
            return (
              <div key={e.name} className="Basket_Item">
                <p>{e.name}</p>

                <div className="controls" data-index={conInd}>
                  <p data-act="-" onClick={onClick}>
                    -
                  </p>
                  <p className="amount">{e.amount}</p>
                  <p data-act="+" onClick={onClick}>
                    +
                  </p>
                  <p className="remove" data-act="rm" onClick={onClick}>
                    remove
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p style={{ textAlign: "center" }}>add beers</p>
        )}
      </div>
      <div className="Guest_Header" onClick={focusing} data-index={index}>
        <div className="Basket_Total" style={basket.length > 0 ? { justifyContent: "space-between" } : { justifyContent: "space-evenly" }}>
          <p className="Guest_Number">{"Guest " + index}</p>
          {basket.length > 0 ? <p className="Guest_Total_Amount">{`${summing(basket)},-`}</p> : null}
        </div>
      </div>
      <div className={`Guest_Form ${Number(form) === Number(index) && Number(guest) === Number(index) && basket.length > 0 ? "open" : ""}`}>
        <Form />
      </div>
      {Number(guest) === index && basket.length > 0 ? (
        <p className="tap" onClick={formFocus} data-index={index}>
          {Number(form) === index ? "close" : "tap to pay"}
        </p>
      ) : null}
    </div>
  );
};
export default GuestContainer;
