import PlaceOrder from "./PlaceOrder";
// import Queue from "./Queue";

const Order = ({ handlePosting, missing, filled, payments }) => {
  return (
    <div className="Order">
      <div className={`Inner_Order ${payments.length > 0 ? "" : "flipped"}`}>
        <PlaceOrder handlePosting={handlePosting} missing={missing} filled={filled} />
        {/* <Queue /> */}
      </div>
    </div>
  );
};

export default Order;
