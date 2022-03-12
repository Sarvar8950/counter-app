import React from "react"

function Counter() {
    const [sum, setSum] = React.useState(0)

    function set() {
        setSum(0)
        document.querySelector(".in").value = ""
    }
    function inp(e) {
        setSum(+e.target.value)
    }
    function add(num) {
        setSum(sum + num)
        document.querySelector(".in").value = ""
    }
    function mult() {
        setSum(sum * 2)
        document.querySelector(".in").value = ""
    }
    function divide() {
        setSum(parseInt(sum / 2))
        document.querySelector(".in").value = ""
    }
    return (
        <>
            <h1>Counter App</h1>
            <input className="in" type="number" placeholder="Set Value" onChange={inp}/>
            <h1>Total : {sum}</h1>
            <button className="add" onClick={() => add(1)}>Add</button>
            <button className="sub" onClick={() => add(-1)}>SUBSTRACT</button>
            <button onClick={mult}>SQUARE</button>
            <button onClick={divide}>Half</button>
            <button onClick={set}>SET 0</button>
        </>
    )
}

export {Counter}