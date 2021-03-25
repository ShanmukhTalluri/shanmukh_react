import React from 'react'

var greet="";
var d = new Date(2021,2,6,7)
var d = d.getHours();

function Sahi(){
    if(d>=1 && d<12){
        greet = "good morning"
    }else if(d>=12 && d<19){
        greet="good afternoon"
    }else{greet="good night"}
    return <p>hello sir,{greet}</p>
    
}
function Aq(){
    let boob = "chooocha";
    return boob;
}
var de = "choot";
export default Sahi;
export {Aq,de};