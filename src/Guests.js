import GuestContainer from "./GuestContainer";

const Guests = ({ focusing, guest, baskets, handleAdding, handlePayment, payments, formFocus, form }) => {
  // console.log(baskets);
  return (
    <div className="Guests">
      <GuestContainer index={1} focusing={focusing} formFocus={formFocus} form={form} guest={guest} basket={baskets[0]} payments={payments} handlePayment={handlePayment} handleAdding={handleAdding} />
      <GuestContainer index={2} focusing={focusing} formFocus={formFocus} form={form} guest={guest} basket={baskets[1]} payments={payments} handlePayment={handlePayment} handleAdding={handleAdding} />
      <GuestContainer index={3} focusing={focusing} formFocus={formFocus} form={form} guest={guest} basket={baskets[2]} payments={payments} handlePayment={handlePayment} handleAdding={handleAdding} />
      <GuestContainer index={4} focusing={focusing} formFocus={formFocus} form={form} guest={guest} basket={baskets[3]} payments={payments} handlePayment={handlePayment} handleAdding={handleAdding} />
    </div>
  );
};
export default Guests;
