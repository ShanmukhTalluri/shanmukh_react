import React from 'react'
import ReactDOM from 'react-dom'

const Slotm=(props)=>{
    let x=props.x;
    let y=props.y;
    let z=props.z;
    if(props.x===props.y && props.y===props.z){
        return(
            <h1>matching</h1>,
            <p>{props.x} {props.y} {props.z}</p>
        )
    }else{
        return(
            <h1>not matching</h1>,
            <p>{props.x} {props.y} {props.z}</p>
        )
    }
}

const App=()=>{
    return(
        <h1>welcome to my slot machine</h1>,
        <Slotm x="a" y="a" z="a" />,
        <Slotm x="a" y="c" z="b" />,
        <Slotm x="c" y="b" z="a" />
    )
}

ReactDOM.render(
    <App/>

)