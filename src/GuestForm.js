import Form from "./Form";
import MobilePay from "./MobilePay";

export default function GuestForm() {
  return (
    <div className="Guest_Form">
      <Form />
      <p>or</p>
      <MobilePay />
    </div>
  );
}
