import Form from "./Form";

const GuestContainer = ({ index, focusing, guest, basket }) => {
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
          basket.map((e) => {
            return (
              <div key={e.name} className="Basket_Item">
                <p style={{ whiteSpace: "nowrap", padding: "0.5em 0" }}>{e.name}</p>
                <p style={{ padding: "0.5em 0" }}>{e.amount}</p>
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
      <div className="Guest_Form">
        <Form />
      </div>
    </div>
  );
};
export default GuestContainer;
