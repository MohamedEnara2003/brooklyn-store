


import { fetchManProduct } from "@/src/rtk/slices/manSlices";
import { fetchWomanProduct } from "@/src/rtk/slices/womenSlices";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {  useEffect,  useState } from "react";
import { useDispatch, useSelector } from "react-redux";


function Search(props){

    const [active , setActive] = useState(false)
    const [value , setValue] = useState("")
    const [Gender , setGender] = useState("men")

    const manProduct = useSelector(state => state.man);
    const womanProduct = useSelector(state => state.women);

    const dispatch = useDispatch();


    useEffect(() =>{
        dispatch(fetchManProduct())
    },[])

    useEffect(() =>{
        dispatch(fetchWomanProduct())
    },[])

    const router = useRouter()

    
    return(
        <>
        <div className={`${props.showSearch == true ? 
        "h-auto component-search":"h-0 scale-0 component-search"}`} 
        onChange={(e)=>{if(e.target.value == ""){setActive(false)}else{setActive(true)}}}>

        <form action="#" className={`${active == true ? "border-red-800 form-search" : "form-search"}`}
        onClick={(e) =>{
        e.preventDefault()


        }}>
        
        <button><FontAwesomeIcon icon={faSearch} className="m-1" onClick={() =>{

        }}/> </button>
        <input type="search" variant="outlined"  placeholder="search product"
        className={`input-search`}  onChange={(e) =>{
        setValue(e.target.value)
        }}/>
        </form>

    <div className="col justify-start ">
    <div className="row justify-evenly">
    <p >Trending Now</p>
    <select id="select-gender" className="text-sm outline-none" onChange={(e) =>{
    setGender(e.target.value)
    }}>
    <option value="men">Search Men's Products</option>
    <option value="women">Search Women's Products</option>
    </select>
    </div>

    <div className="row my-5">
    <Link href="/MenProducts/49" className="suggestions"><FontAwesomeIcon icon={faSearch}/> tshirt</Link>
    <Link href="/MenProducts/31" className="suggestions"><FontAwesomeIcon icon={faSearch}/> jackets</Link>
    <Link href="/MenProducts/19" className="suggestions"><FontAwesomeIcon icon={faSearch}/> shirt</Link>
    <Link href="/MenProducts/33" className="suggestions"><FontAwesomeIcon icon={faSearch}/> jeans</Link>
    <Link href="/WomenProducts/32" className="suggestions"><FontAwesomeIcon icon={faSearch}/> woman jackets</Link>
    </div>

    <div className="row h-auto">
    
    {womanProduct.filter(product => {
    if(value === ''){return null}

    if(product.name.toLowerCase().includes(value.toLowerCase()) ||
    product.color.toLowerCase().includes(value.toLowerCase()) ||
    product.type.toLowerCase().includes(value.toLowerCase())){
    return product;
    }
    }).map(product =>{
    return(
    <>
    <div key={product.id} className={`${Gender == "women" ? "col w-[45%] md:w-1/4" : "hidden"}`}>
    <Image src={product.url} alt={product.name} className="img-search"
    onClick={() =>{
    if(product.dataType === "women"){
    router.push(`/WomenProducts/${product.id}`)
    }
    }}/>
    <p className="my-2">{product.name}</p>
    </div>
    </>
    )
})}
    {manProduct.filter(product => {
    if(value === ''){return null}

    if(product.name.toLowerCase().includes(value.toLowerCase()) ||
    product.color.toLowerCase().includes(value.toLowerCase()) ||
    product.type.toLowerCase().includes(value.toLowerCase())){
    return product;
    }
    }).map(product =>{
    return(
    <>
    <div key={product.id} className={`${Gender == "men" ? "col w-[45%] md:w-1/4" : "hidden"}`}>
    <Image src={product.url} alt={product.type} width={140} height={120} 
    onClick={() =>{
    if(product.dataType === "man"){
    router.push(`/MenProducts/${product.id}`)
    }
    }}/>
    <p className="my-2">{product.name}</p>
    </div>
    </>
    )
})}
    </div>


    </div>

    </div>
    </>
    )
}
export default Search ;