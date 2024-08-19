import React, { useState } from 'react'

function HeaderManProduct(props) {

    const [typeProduct , setTypeProduct ] = useState("All Products")

    const options = [{ id: 1 , name:"All Products"},{ id: 2 , name:"Tshirt"},{ id: 3 , name:"shirt"},
    {id: 4 , name:"jackets"},{ id: 5 , name:"pants"},{ id: 6 , name:"jeans"},{ id: 7 , name:"shorts"},]
    

    return (
    <div className="head-products">
        
    <p className="title-products">
    <span className="text-brooklyn text-2xl lg:text-4xl"> men's </span> {typeProduct }</p>

    <select id="select_manProduct" className="select_products bg-[#eee] mx-[5%]" onChange={(e) =>{
        props.setTypeProduct(e.target.value)
        setTypeProduct(e.target.value)
    }}>
    {options.map(option => {return(<option key={option.id} value={option.name}>{option.name}</option>)}) }
    </select>
    

    </div>
)
}

export default HeaderManProduct