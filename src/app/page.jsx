'use client'
import Image from "next/image";
import Navbar from "./components/navbar";
import "../i18n";
import Search from "./components/search";
import { useState } from "react";
import SectionOne from "./components/SectionOne";
import ShowProducts from "./components/showProduct";
import Information from "./components/information";
import Footer from "./components/footer";


export default function Home() {
  const [showSearch , setShowSearch] = useState(false)

  return (
  <> 
  <Navbar setShowSearch = {setShowSearch}  />
  <div className="home">
  <Search showSearch = {showSearch } setShowSearch = {setShowSearch}/>
  <SectionOne/>
  <Information/>
  <ShowProducts/>

  </div>
  <Footer/>
  </>
  );
}
