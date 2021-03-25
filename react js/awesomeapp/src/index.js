import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Card} from './App'
import {Sdata} from './Sdata'
import {Ncard} from './demo'


ReactDOM.render(
    <>
   <h1>list of netflix series</h1>,
   
       { Sdata.map(Ncard)}
   
    </>
   ,document.querySelector("#root")

)



