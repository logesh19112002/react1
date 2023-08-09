import React from "react"

interface InputFromProps  {
    type : string;
    name : string;
    className : string;
}

const Input = ({type, name, className}:InputFromProps) => {
    return (
        <input type={type} name={name} className={className}/>
    )
}

export default Input;