import BasketGuestNumber from "./BasketGuestNumber";
import GuestTotalAmount from "./GuestTotalAmount";

export default function BasketTotal() {
  return (
    <div className="Basket_Total">
      <BasketGuestNumber />
      <GuestTotalAmount />
    </div>
  );
}
