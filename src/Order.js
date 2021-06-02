import PlaceOrder from "./PlaceOrder";
// import Queue from "./Queue";

const Order = ({ handlePosting }) => {
  return (
    <div className="Order">
      <div className="Inner_Order">
        <PlaceOrder handlePosting={handlePosting} />
        {/* <Queue /> */}
      </div>
    </div>
  );
};

export default Order;
