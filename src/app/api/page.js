'use client'
const { default: dbConnect } = require("@/utils/dbConnect");



import React, { useEffect } from 'react'

function Page() {

    useEffect(() =>{
    dbConnect()
    },[])

  return (
    <div>Page</div>
  )
}

export default Page