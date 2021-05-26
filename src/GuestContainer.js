import Form from "./Form";

export default function GuestContainer() {
  return (
    <div className="Guest_Container">
      <div className="GuestHeader">
        <div className="Basket_Container">
          <p>Add Beers</p>
        </div>
        <div className="Basket_Total">
          <p className="Guest_Number">Guest 1</p>
          <p className="Guest_Total_Amount">60,-</p>
        </div>
      </div>
      <div className="Guest_Form">
        <Form />
      </div>
    </div>
  );
}
