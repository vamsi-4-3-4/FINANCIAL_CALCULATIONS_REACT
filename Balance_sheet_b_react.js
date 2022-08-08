import React from 'react';
import {useState} from 'react';
const Balancesheettwo=()=>{
const[data,setdatainto]=useState({
cash:NaN,
short_term_investments:NaN,
accounts_receivable:NaN,
supplies:NaN,
prepaid_expenses:NaN,
land:NaN,
buildings:NaN,
equipment:NaN,
accumulated_depreciation:NaN,
net_property_equipment:NaN,
right_to_assets:NaN,
intangible_assets:NaN,
accounts_payable:NaN,
unearned_revenue:NaN,
wages_payable:NaN,
utilities_payable:NaN,
current_lease_liabilities:NaN,
notes_payable:NaN,
long_term_lease_liabilities:NaN,
common_stock_par_value:NaN,
additional_paid_in_capital:NaN,
tresury_stock:NaN,
retained_earnings:NaN
});
const [totalcurrentassets,stca]=useState(0);
const [totalcost,stc]=useState(0);
const [netpropertyequipment,snpe]=useState(0);
const [totalassets,sta]=useState(0);
const [totalcurrentliabilities,stcl]=useState(0);
const [totalliabilities,stl]=useState(0);
const [totalshareholdersequity,stse]=useState(0);
const [totalliabilitiesandequity,stlae]=useState(0);
const [results,setresults]=useState("");

    const setdata=(e)=>{
setdatainto({...data,[e.target.name]:e.target.value})
    }


const cleardata=()=>{
    data.cash=NaN
data.short_term_investments=NaN
data.accounts_receivable=NaN
data.supplies=NaN
data.prepaid_expenses=NaN
data.land=NaN
data.buildings=NaN
data.equipment=NaN
data.accumulated_depreciation=NaN
data.net_property_equipment=NaN
data.right_to_assets=NaN
data.intangible_assets=NaN
data.accounts_payable=NaN
data.unearned_revenue=NaN
data.wages_payable=NaN
data.utilities_payable=NaN
data.current_lease_liabilities=NaN
data.notes_payable=NaN
data.long_term_lease_liabilities=NaN
data.common_stock_par_value=NaN
data.additional_paid_in_capital=NaN
data.tresury_stock=NaN
data.retained_earnings=NaN
stca(0)
stc(0)
snpe(0)
sta(0)
stcl(0)
stl(0)
stse(0)
stlae(0)
setresults("")
}
const calculate=()=>{
var totalcurrentassets=parseFloat(data.cash)+parseFloat(data.short_term_investments)+parseFloat(data.accounts_receivable)+parseFloat(data.supplies)+parseFloat(data.prepaid_expenses);
var totalcost=parseFloat(data.land)+parseFloat(data.buildings)+parseFloat(data.equipment);
var netpropertyequipment=totalcost-parseFloat(data.accumulated_depreciation)
var totalassets=totalcurrentassets+netpropertyequipment+parseFloat(data.right_to_assets)+parseFloat(data.intangible_assets);
var totalcurrentliabilities=parseFloat(data.accounts_payable)+parseFloat(data.unearned_revenue)+parseFloat(data.wages_payable)+parseFloat(data.utilities_payable)+parseFloat(data.current_lease_liabilities)
var totalliabilities=totalcurrentliabilities+parseFloat(data.notes_payable)+parseFloat(data.long_term_lease_liabilities)
var totalshareholdersequity=parseFloat(data.common_stock_par_value)+parseFloat(data.additional_paid_in_capital)+parseFloat(data.retained_earnings)-parseFloat(data.tresury_stock)
var totalliabilitiesandequity=totalliabilities+totalshareholdersequity;
stca(totalcurrentassets)
stc(totalcost)
snpe(netpropertyequipment)
sta(totalassets)
stcl(totalcurrentliabilities)
stl(totalliabilities)
stse(totalshareholdersequity)
stlae(totalliabilitiesandequity)

if(totalassets===totalliabilitiesandequity){
    setresults("BALANCED")
}else{
    setresults("NOT BALANCED")
}

}
const holddata=(e)=>{
    e.preventDefault();
}
    return(
        <div>
<form onSubmit={holddata}>
<table>
    <tr>
    <th>INPUT THE ASSET VALUES</th>
    <th>INPUT LIABILITIES AND SHAREHOLDERS EQUITY</th>
    <th>RESULTS</th>
    </tr>
    <tr>
        <td>
        <label>CASH</label><br/>
<input type="number"  value={data.cash} name="cash" onChange={setdata} /><br/>
<label>SHORT TERMINVESTMENTS</label><br/>
<input type="number" value={data.short_term_investments}  name="short_term_investments" onChange={setdata}/><br/>
<label>ACCOUNTS RECEIVABLE</label><br/>
<input  type="number" value={data.accounts_receivable} name="accounts_receivable" onChange={setdata} /><br/>
<label>SUPPLIES</label><br/>
<input type="number" value={data.supplies}   name="supplies" onChange={setdata}/><br/>
<label>PREPAID EXPENSES</label><br/>
<input type="number"  value={data.prepaid_expenses}  name="prepaid_expenses" onChange={setdata}/><br/>
<label>VALUE OF LAND</label><br/>
<input type="number"  value={data.land}  name="land" onChange={setdata} /><br/>
<label>BUILDINGS</label><br/>
<input type="number"  value={data.buildings}  name="buildings" onChange={setdata} /><br/>
<label>EQUIPMENT</label><br/>
<input type="number"  value={data.equipment}  name="equipment" onChange={setdata}/><br/>
<label>ACCUMULATED DEPRECIATION</label><br/>
<input type="number"  value={data.accumulated_depreciation}  name="accumulated_depreciation"  onChange={setdata}/><br/>
<label>RIGHT TO ASSETS</label><br/>
<input type="number"  value={data.right_to_assets}  name="right_to_assets" onChange={setdata} /><br/>
<label>INTANGIBLE ASSETS</label><br/>
<input type="number"  value={data.intangible_assets}  name="intangible_assets" onChange={setdata} /><br/>
        </td>
        <td>
            <label>ACCOUNTS PAYABLE</label><br/>
<input type="number" value={data.accounts_payable}   name="accounts_payable" onChange={setdata}/><br/>
<label>UNEARNED REVENUE</label><br/>
<input type="number"  value={data.unearned_revenue} name="unearned_revenue" onChange={setdata} /><br/>
<label>WAGES PAYABLE</label><br/>
<input type="number"  value={data.wages_payable}  name="wages_payable" onChange={setdata} /><br/>
<label>UTILITIES PAYABLE</label><br/>
<input type="number" value={data.utilities_payable}   name="utilities_payable" onChange={setdata}/><br/>
<label>CURRENT LEASE LIABILITIES</label><br/>
<input  type="number" value={data.current_lease_liabilities}  name="current_lease_liabilities" onChange={setdata}/><br/>
<label>NOTES PAYABLE</label><br/>
<input  type="number" value={data.notes_payable}  name="notes_payable" onChange={setdata}/><br/>
<label>LONG TERM LEASE LIABILITIES</label><br/>
<input  type="number" value={data.long_term_lease_liabilities}  name="long_term_lease_liabilities" onChange={setdata}/><br/>

<label>COOMON STOCK PAR VALUE</label><br/>
<input type="number" value={data.common_stock_par_value}   name="common_stock_par_value" onChange={setdata}/><br/>
<label>ADDITIONAL PAID IN CAPITAL</label><br/>
<input type="number"  value={data.additional_paid_in_capital}  name="additional_paid_in_capital" onChange={setdata}/><br/>
<label>TRESURY STOCK</label><br/>
<input type="number"  value={data.tresury_stock}  name="tresury_stock" onChange={setdata}/><br/>
<label>RETAINED EARNINGS</label><br/>
<input type="number"  value={data.retained_earnings}  name="retained_earnings" onChange={setdata}/>
<br/>
        </td>
        <td>
        <table>
    <tr>
        <th>TOTAL CURRENT ASSETS</th>
        <td>{totalcurrentassets}</td>
    </tr>
    <tr>
        <th>TOTAL COST</th>
        <td>{totalcost}</td>
    </tr>
    <tr>
        <th>NET PROPERTY AND EQUIPMENT</th>
        <td>{netpropertyequipment}</td>
    </tr>
    <tr>
        <th>TOTAL ASSETS</th>
        <td>{totalassets}</td>
    </tr>
    <tr>
        <th>TOTAL CURRENT LIABILITIES</th>
        <td>{totalcurrentliabilities}</td>
    </tr>
    <tr>
        <th>TOTAL LIABILITIES</th>
        <td>{totalliabilities}</td>
    </tr>
    <tr>
        <th>TOTAL SHAREHOLDERS EQUTY</th>
        <td>{totalshareholdersequity}</td>
    </tr>
    <tr>
        <th>TOTAL LIABILITIES AND EQUITY</th>
        <td>{totalliabilitiesandequity}</td>
    </tr>
    <tr>
        <th>RESULT</th>
        <td>{results}</td>
    </tr>

</table>
        </td>
    </tr>
</table>


<button type="submit"onClick={calculate}>CALCULATE THE SHEET</button>
<button type="submit" onClick={cleardata}>CLEAR THE VALUES</button>

</form>


        </div>
    )
}
export default Balancesheettwo;
