import Image from "next/image";
import { useRouter } from "next/navigation";


function ShowProducts(){

    const router = useRouter()
    const url = "https://img.freepik.com/free-photo/young-handsome-man-choosing-clothes-shop_1303-19722.jpg?t=st=1723928810~exp=1723932410~hmac=89c9042eaec117d76bfe5ee9e3ab1a521df086bcc20051459ddf5ed04949e671&w=740"
    return(
    <>
    <div className="show-product">

    <Image src="/shirt.png" width={500} alt="products-show" height={400} className="img-product"
    onClick={() =>{router.push('/MenProducts/19')}}/>

    <Image src="/jacket.png"width={500} alt="products-show" height={400} className="img-product"
    onClick={() =>{router.push('/MenProducts/31')}}/>

    <Image src={url}
    width={500} alt="products-show" height={400} className="img-product"
    onClick={() =>{router.push('/MenProducts')}}/>

    <Image src="/women logo.png" width={500} alt="products-show" height={400} className="img-product"
    onClick={()=>{router.push('/WomenProducts')}}/>

    </div>
    
    </>
    )
}
export default ShowProducts ;