const Order = ({ handlePosting, missing, filled, payments }) => {
  return (
    // <div className="Order">
    //   <div className={`Inner_Order ${payments.length > 0 ? "" : "flipped"}`}>
    //     <div className="PlaceOrder">
    //       <button className={`PlaceOrderButton ${missing.length > 0 || filled.length === 0 ? "disable" : ""}`} onClick={handlePosting}>
    //         Place Order
    //       </button>
    //     </div>
    //     <div className="Queue">
    //       <p>
    //         <span className="QueuePlace">X</span> in queue
    //       </p>
    //       <p>
    //         ID: <span className="UserID">X</span>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div className="Order">
      <h1 className="orderNumber">128</h1>
      <button className={`PlaceOrderButton ${missing.length > 0 || filled.length === 0 ? "disable" : ""} ${payments.length > 0 ? "" : "flipped"}`} onClick={handlePosting}>
        Place Order
      </button>
    </div>
  );
};

export default Order;
