'use client'


import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEdit} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import "@/src/i18n";
import { useRouter } from "next/navigation";
import Navbar from "../../components/navbar";
import { fetchWomanProduct } from "@/src/rtk/slices/womenSlices";
import Image from "next/image";
import Footer from "../../components/footer";

function EditWomanProduct(){

    const [typeProduct , setTypeProduct ] = useState("All Products")
    const [showSearch , setShowSearch] = useState(false)
    const womenProduct = useSelector((state) => state.women)
    const dispatch = useDispatch()
    
    useEffect(()=> {
        RenderProduct()
    },[])
    
    
    const RenderProduct = () =>{
        dispatch(fetchWomanProduct())
    }
    

    const deleteProduct = (id)=>{
        axios({
            method: 'delete',
            url: `http://localhost:3005/Women/${id}`,
        }).then(data => {
        RenderProduct()
        })
    }


    const options = [{ id: 1 , name:"All Products"},{ id: 2 , name:"Tshirt"},{ id: 3 , name:"shirt"},
    { id: 4 , name:"jackets"},{ id: 5 , name:"pants"},{ id: 6 , name:"jeans"},{ id: 7 , name:"dresses"},]

    const router = useRouter()
    return(
        <>
    <Navbar setShowSearch = {setShowSearch}/>

    <div className="container-edit-Product ">
    
    <div className="head_Product">
    
    <Link href={`/admin/editManProduct`} className="btn-gender-product"> men products</Link>

    <Link href={`/admin/create2`} className="create_products">create products</Link>

    <p className="num_products">Number of products : {womenProduct.length}</p>
    
    <select id="select_manProduct" onChange={(e) =>{
        setTypeProduct(e.target.value)
    }}>
    {options.map(option => {return(<option key={option.id} value={option.name}>{option.name}</option>)}) }
    </select>
    </div>

        
    {womenProduct.map((product) =>{
        if(typeProduct === product.type || typeProduct === "All Products"){
            return(
            <>
            <div className="products" key={product.id}>
            <span className="td_text">{product.id}   </span>
            <span className="td_text">{product.name} </span>
            <span className="td_text">{product.type} </span>
            <span className="td_text">{product.price}</span>
            <Image src={product.url} alt={product.name} className="td_image" width={200} height={200}/>
            <FontAwesomeIcon icon={faDeleteLeft} className="cursor-pointer" onClick={()=>{
            Swal.fire({
            title:`Are You Sure To Delete This Product ?`,
            color: "black",
            showCancelButton : true ,
            animation: true
            }).then((data) => {if(data.isConfirmed){deleteProduct(product.id)}})}}/>

            <FontAwesomeIcon icon={faEdit}  className="cursor-pointer" onClick={() =>{
            router.push(`/admin/editWomenProduct/${product.id}`)
            }}/>

            </div>

            </>
            )
        }
    })}
   

    </div>

    <Footer/>
    </>
    )
}
export default EditWomanProduct ;

