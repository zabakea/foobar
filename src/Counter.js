import { useState, useEffect, useRef } from "react";


const Counter = (count) => {
    const [sum, setSum] = useState(0);

    useInterval(() => {
        setSum(sum + count.count);
    }, count.count * 5000);
    console.log(sum);

    return (
        <p className="Counter"> Today we have sold <br />
            <div className="Sum">{sum}</div> <p>beers</p>

        </p>
    )
};



function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export default Counter;