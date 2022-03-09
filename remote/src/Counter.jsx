import React, {useState} from 'react'



const Counter = () => {
    const [counter ,setCounter] = useState(0)
    return (
        <div>
            Counter: {counter}
            <div><button onClick={() => setCounter(counter+1)}>Add + </button></div>
        </div>
    )
}

export default Counter