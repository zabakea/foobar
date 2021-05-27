import GuestContainer from "./GuestContainer";

const Guests = ({ focusing, guest, baskets }) => {
  console.log(baskets);
  return (
    <div className="Guests">
      <GuestContainer index={1} focusing={focusing} guest={guest} basket={baskets[guest - 1]} />
      <GuestContainer index={2} focusing={focusing} guest={guest} basket={baskets[guest - 1]} />
      <GuestContainer index={3} focusing={focusing} guest={guest} basket={baskets[guest - 1]} />
      <GuestContainer index={4} focusing={focusing} guest={guest} basket={baskets[guest - 1]} />
    </div>
  );
};
export default Guests;
