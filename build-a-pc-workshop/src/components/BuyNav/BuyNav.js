import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const BuyNav = props => (

    <div className="col-md-12 text-center"> 
    <button style={{marginLeft: 5}} id="singlebutton" name="singlebutton" class="btn btn-primary">CPU</button> 
    <button style={{marginLeft: 5}} id="singlebutton" name="singlebutton" class="btn btn-primary">Motherboard</button> 
    <button style={{marginLeft: 5}} id="singlebutton" name="singlebutton" class="btn btn-primary">Memory</button> 
    <button style={{marginLeft: 5}} id="singlebutton" name="singlebutton" class="btn btn-primary">Storage</button>
    <button style={{marginLeft: 5}} id="singlebutton" name="singlebutton" class="btn btn-primary">Video Card</button> 
    <button style={{marginLeft: 5}} id="singlebutton" name="singlebutton" class="btn btn-primary">Power Supply</button> 
</div>

);

export default BuyNav;
