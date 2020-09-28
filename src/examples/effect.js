import React, {useState, useEffect} from 'react';


function App() {
    const [type, setType] = useState('users')
    const [data, setData] = useState('users')
    const [pos, setPos] = useState({
        x: 0, y: 0
    })
    // useEffect(()=> {
    //     console.log("render")
    // }  )
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
        return () => {
            console.log("cleaning")
        }
    }, [type])
    // console.log("DATA", data)

    const mouseMoveHandler = event => {
        setPos({x: event.clientX, y: event.clientY})
    }
    useEffect(() => {
        console.log("ComponentDidMount")
        window.addEventListener('mousemove', mouseMoveHandler)
        return () => {
            window.removeEventListener(mouseMoveHandler)
        }
    }, [])


    return (
        <div>
            <h1>resource: {type}</h1>
            <button onClick={() => setType('USERS')} className="btn btn-success">USERS</button>
            <button onClick={() => setType('TODOS')} className="btn btn-danger">TODO</button>
            <button onClick={() => setType('POSTS')} className="btn btn-warning">POSTS</button>
            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    )
}

export default App;
