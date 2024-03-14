import "./App.css";
import React from "react";
import { useState } from "react";
import './style.scss'

function App() {
    
    const handleClick = () => {
        alert("Hello, world!");
    }

    return (
        <div className="App">
            <button className='buttonSass' onClick={handleClick}>
                Click to show alert
            </button>

            <Counter />

            <div className="class1">
                <p className="class2">Hello world</p>
            </div>
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(prev => prev + 1);
    }

    return (
        <button className="button" onClick={handleClick}>
            Click {count} times
        </button>
        
    )
}

export default App;
