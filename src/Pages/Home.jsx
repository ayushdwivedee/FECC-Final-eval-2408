import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const Home = () => {
const [name,setName]=useState([])
const [image,setImage]=useState([])
const [population,setPopulation]=useState([])
const [region,setRegion]=useState([])
const [capital,setCapital]=useState([])
const [loading,setLoading]=useState(false)

const getCountries = async()=>{
    setLoading(true)
    try {
        let res=await axios.get("https://restcountries.com/v3.1/all")
// console.log(res.data)
setName(res?.data?.name)
setImage(res?.data?.flag)
setPopulation(res?.data?.population)
setRegion(res?.data?.region)
setCapital(res?.data?.capital)
setLoading(false)
    } catch (error) {
        console.log("something went wrong",error)
    }
}


  return (
    <div>
    
      <div><img src={image} alt="" /></div>
      <h1>{name}</h1>
      <h3>Population : {population}</h3>
      <h3>Region : {region}</h3>
      <h3>Capital : {capital}</h3>
      <button onClick={Navigate(`/${name}`)}>MoreDetails</button>
    </div>
  )
}

export default Home
