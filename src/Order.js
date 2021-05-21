import PlaceOrder from "./PlaceOrder";
import Queue from "./Queue";

export default function Order() {
  return (
    <div className="Order">
      <div className="Inner_Order">
        <PlaceOrder />
        <Queue />
      </div>
    </div>
  );
}
