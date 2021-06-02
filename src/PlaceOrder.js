const PlaceOrder = ({ handlePosting }) => {
  return (
    <div className="PlaceOrder">
      <button className="PlaceOrderButton" onClick={handlePosting}>
        Place Order
      </button>
    </div>
  );
};

export default PlaceOrder;
