import Form from "./Form";

const GuestContainer = ({ index, focusing, guest, basket }) => {
  // console.log(basket);
  // console.log(basket.length === 0 ? "true" : "false");
  //
  return (
    <div className={`Guest_Container ${Number(guest) === index ? "focus" : ""}`}>
      <div className="Basket_Container" style={{ display: "flex", flexDirection: "column" }}>
        {/* <p>add Beers</p> */}
        {basket.map((e) => {
          return (
            <p key={e.name} style={{ whiteSpace: "nowrap" }}>
              {e.name}
            </p>
          );
        })}
      </div>
      <div className="Guest_Header" onClick={focusing} data-index={index}>
        <div className="Basket_Total">
          <p className="Guest_Number">{"Guest " + index}</p>
          {/* <p className="Guest_Total_Amount">60,-</p> */}
        </div>
      </div>
      <div className="Guest_Form">
        <Form />
      </div>
    </div>
  );
};
export default GuestContainer;
