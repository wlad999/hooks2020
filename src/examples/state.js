import React, {useState} from 'react';

function computeInitialCounter() {
    console.log("Some calculations...")
    return Math.round(Math.random() * 100)
}

function App() {

    const [counter, setCounter] = useState(() => computeInitialCounter())

    const [state, setState] = useState({title: "Counter", date: Date.now()})

    const increment = () => {
        setCounter(prev => prev + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }

    function updateTitle() {
        setState(prev => {
                return {...prev, title: "New Title"}
            }
        )
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increment} className="btn btn-success">INC</button>
            <button onClick={decrement} className="btn btn-danger">DEC</button>
            <button onClick={updateTitle} className="btn btn-default">change title
            </button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;
