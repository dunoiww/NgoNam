import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
    
    const handleClick = () => {
        alert("Hello, world!");
    }

    return (
        <div className="App">
            <button className='button' onClick={handleClick}>
                Click to show alert
            </button>

            <Counter />
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(prev => prev + 1);
    }

    console.log('re-render');

    return (
        <button className="button" onClick={handleClick}>
            Click {count} times
        </button>
        
    )
}

export default App;
