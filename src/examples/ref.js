import React, {useState, useEffect, useRef} from 'react';


function App() {

    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)

    const prevValue = useRef('')

    useEffect(() => {
        prevValue.current = value

    }, [value])

    useEffect(() => {
        renderCount.current++
        console.log("inputRef", inputRef.current.value)
    })

    const focus = () => {
        inputRef.current.focus()
    }


    return (
        <div>
            <h1>render count: {renderCount.current}</h1>
            <h2>prevValue: {prevValue.current}</h2>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button className="btn btn-warning" onClick={focus}>focus</button>
        </div>
    )
}

export default App;
