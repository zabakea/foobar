import BeerListUL from "./BeerListUL";

export default function BeerList({ data }) {

    return (
        <div className="Beer_List">
            <BeerListUL data={data} />
        </div>

    )
}

