export default function BeerListUL(props) {
    const beername = Object.keys(props).map(key => (<li key={props[key].id}>{props[key].beer}</li>));

    return (
        <ul>
            {beername}
        </ul>
    )
}
