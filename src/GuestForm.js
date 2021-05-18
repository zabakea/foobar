import Form from "./Form";
import MobilePay from "./MobilePay";


export default function GuestForm() {
    return (
        <div className="GuestForm">
            <Form />
            <p>Or</p>
            <MobilePay />
        </div>

    )

}