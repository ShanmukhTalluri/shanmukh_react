import React from 'react'
import {Sdata} from './Sdata'
import {Ncard} from './demo'
function Card(props){
    return(
    <div className="cards">
    <div className="card">
        <img src={props.imgsrc} height="200px" width="300px" alt="" target="__blank"/>
        <div className="card_info">
            <span className="card_category"></span>
            <h1 className="card_title"></h1>
            <a href={props.link} target="_blank">
                <button>watch now</button>
            </a>
        </div>
    </div>
</div>)
}
export {Card};