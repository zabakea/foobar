import BasketContainer from "./BasketContainer";
import BasketTotal from "./BasketTotal";


export default function GuestHeader() {
    return (
        <div className="GuestHeader">
            <BasketContainer />
            <BasketTotal />
        </div>
    )
}