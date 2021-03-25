import React from 'react'
import { Card } from './App'
import {Sdata} from './Sdata'

const Ncard=(val)=>{
    return(
        <Card
        keys={val.key}
            imgsrc={val.imgsrc}
            link={val.link}
            tittle={val.tittle}
        />
    );

    
}
export {Ncard};