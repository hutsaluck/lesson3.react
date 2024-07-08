import React, {FC, useState} from 'react';
import usePrevious from "../../hooks/usePrevious";
import './randomize-numbers.css'

const RandomizeNumbers: FC = () => {
    const [count, setCount] = useState(0);
    let [currentValue, prevValue] = usePrevious(count)

    return (
        <div className="randomize-content">
            <h2>Numbers</h2>
            <div className="content-numbers">
                <div className="wrap-number">
                    <p className="number">{prevValue ? prevValue : `Empty`}</p>
                    <p className="title">Prevent value</p>
                </div>
                <div className="wrap-number">
                    <p className="number">{currentValue}</p>
                    <p className="title">Current value</p>
                </div>
            </div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default RandomizeNumbers;