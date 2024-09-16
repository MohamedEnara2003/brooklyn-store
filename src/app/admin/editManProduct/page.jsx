'use client'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import "@/src/i18n";
import { useRouter } from "next/navigation";
import Navbar from "../../components/navbar";
import { fetchManProduct } from "@/src/rtk/slices/manSlices";
import Image from "next/image";
import Footer from "../../components/footer";

function ManProduct(){
    const [typeProduct , setTypeProduct ] = useState("All Products")
    const manProduct = useSelector((state) => state.man)
    const dispatch = useDispatch()

    const [showSearch , setShowSearch] = useState(false)



    const RenderProduct = () =>{
        dispatch(fetchManProduct())
    }

    useEffect(()=> {
        RenderProduct()
    },[])
    
    const deleteProduct = (id)=>{
        axios({
            method: 'delete',
            url: `https://brooklyn-vercel.vercel.app/MAN/${id}`,
        }).then(data => {
        RenderProduct()
        })
    }


    const options = [{ id: 1 , name:"All Products"},{ id: 2 , name:"Tshirt"},{ id: 3 , name:"shirt"},
    { id: 4 , name:"jackets"},{ id: 5 , name:"pants"},{ id: 6 , name:"jeans"},{ id: 7 , name:"shorts"},]

    const router = useRouter()
    return(
        <>
    <Navbar setShowSearch = {setShowSearch}/>

    <div className="container-edit-Product ">
    
    <div className="head_Product">
    
    <Link href={`/admin/editWomenProduct`} className="btn-gender-product"> women products</Link>

    <Link href={`/admin/create1`} className="create_products">create products</Link>

    <p className="num_products">Number of products : {manProduct.length}</p>
    
    <select id="select_manProduct" onChange={(e) =>{
        setTypeProduct(e.target.value)
    }}>
    {options.map(option => {return(
    <option key={option.id} value={option.name}>{option.name}</option>)}) }
    </select>
    </div>

        
    {manProduct.map((product , i) =>{
        if(typeProduct === product.type || typeProduct === "All Products"){
            return(
            <>
            <div className="products" key={product.id}>
            <span className="td_text">{product.id}   </span>
            <span className="td_text">{product.name} </span>
            <span className="td_text">{product.type} </span>
            <span className="td_text">{product.price}</span>
            <Image src={product.url} alt={product.name} className="td_image" width={200} height={200}/>

            <FontAwesomeIcon icon={faTrashAlt} className="btn-del" onClick={()=>{
            Swal.fire({
            title:`Are You Sure To Delete This Product ?`,
            color: "black",
            showCancelButton : true ,
            animation: true
            }).then((data) => {if(data.isConfirmed){deleteProduct(product.id)}})}}/>
    
            <FontAwesomeIcon icon={faEdit}  className="btn-edit" onClick={() =>{
            router.push(`/admin/editManProduct/${product.id}`)
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
export default ManProduct ;


