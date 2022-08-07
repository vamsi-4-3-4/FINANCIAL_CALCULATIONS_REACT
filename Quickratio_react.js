
import React from 'react';
import {useState} from 'react';
const Quickratio=()=>{
const [data,setdata]=useState({
    currentassets:0,
    inventories:0,
    liabilities:0
});

const[ratio,setquickratio]=useState(0);
const set=(e)=>{
    setdata({...data,[e.target.name]:e.target.value});
}
    
const handleSubmit=(e)=>{
    e.preventDefault();
}
const ratiofinder=()=>{
    setquickratio((data.currentassets-data.inventories)/data.liabilities)
}
const clearvalues=(e)=>{
    data.currentassets=0
    data.inventories=0
    data.liabilities=0
    setquickratio(0)
}
    return(
        <div>
<center>
    <div>
        <h3>FIND THE QUICK RATIO</h3>
        
        <form onSubmit={handleSubmit}>
            <input type="number" name="currentassets" onChange={set} value={data.currentassets}/><br/>
            <input type="number" name="inventories" onChange={set} value={data.inventories}/><br/>
            <input type="number" name="liabilities" onChange={set} value={data.liabilities}/><br/>
        <button type="submit" onClick={ratiofinder}>CALCULATE THE RATIO</button>
        <button type="submit" onClick={clearvalues}>CLEAR THE VALUES</button>
        </form>
        <div>YOUR CURRENTASSETS ARE:{data.currentassets}</div>
        <div>YOUR INVENTORIES ARE:{data.inventories}</div>
        <div>YOUR LIABILITIES ARE:{data.liabilities}</div>
        <div>YOUR QUICKRATIO IS:{ratio}</div>
    </div>
</center>
        </div>
    )
}

export default Quickratio;
