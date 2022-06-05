import React from "react";
import { useState } from "react"
type InputProps = {
    id: string,
    val: number,
    title: string,
    setVal: (x: number) => void,
}

const Input = (props: InputProps) => {
    const [val, setVal] = useState(props.val);
    
    //Keeps the value within the acceptable range
    const getValidValue = (value: number): number => {

        if (value < 1) {
            value = 1
        }
        if (value > 10) {
            value = 10
        }
        else if (isNaN(value)) {
            value = 1
        }
        return value;
    }

    //Passes the value in the App component state to be updated
    const updateValue = (e) => {
        let value = getValidValue(parseInt(e.target.value));
        props.setVal(value)
        setVal(value);
    }
    return (
        <div>
            <label htmlFor={props.id}>{props.title}</label>
            <input role ='input' type="number" id={props.id} name={props.id} onChange={updateValue} value={props.val} />
        </div>
    )
}

export default Input;

