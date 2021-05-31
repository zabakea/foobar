import GuestContainer from "./GuestContainer";

const Guests = ({ focusing, guest, baskets, onClick, formFocus, form }) => {
  // console.log(baskets);
  return (
    <div className="Guests">
      <GuestContainer index={1} focusing={focusing} formFocus={formFocus} form={form} guest={guest} basket={baskets[0]} onClick={onClick} />
      <GuestContainer index={2} focusing={focusing} formFocus={formFocus} form={form} guest={guest} basket={baskets[1]} onClick={onClick} />
      <GuestContainer index={3} focusing={focusing} formFocus={formFocus} form={form} guest={guest} basket={baskets[2]} onClick={onClick} />
      <GuestContainer index={4} focusing={focusing} formFocus={formFocus} form={form} guest={guest} basket={baskets[3]} onClick={onClick} />
    </div>
  );
};
export default Guests;
