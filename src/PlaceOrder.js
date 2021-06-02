const PlaceOrder = ({ handlePosting, missing, filled }) => {
  return (
    <div className="PlaceOrder">
      <button className={`PlaceOrderButton ${missing.length > 0 || filled.length === 0 ? "disable" : ""}`} onClick={handlePosting}>
        Place Order
      </button>
    </div>
  );
};

export default PlaceOrder;
