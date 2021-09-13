import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import { motion } from "framer-motion"
import search from '../public/icon-search.svg'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Home: NextPage = () => {
  const [User, setUser] = useState('octocat')
  const [Info, setInfo] = useState<any>([])

  const fetchData = () => {
    return axios.get(`https://api.github.com/users/${User}`)
    .then((res) => {
      setInfo(res.data)
      return res.data
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    fetchData()
  },[])


  return (
  <div className="bg-snow flex h-screen flex-col gap-4  dark:bg-dark-mode-bg transition duration-75">
    <Navbar/>
    <motion.div initial={{y : -150}} animate={{y : 0}} className="flex flex-row items-center px-3 mx-auto gap-2 h-16 rounded-2xl dark:bg-dark-blue bg-white shadow-xl w-full max-w-mob-search">
      <Image src={search} alt="search icon"/>
      <input onChange={(e) => setUser(e.target.value)} type="text" className="bg-transparent outline-none dark:text-white text-sm font-Space-Mono w-full" placeholder="Search GitHub username..." />
      <button onClick={() => fetchData()} className="h-11 bg-sky-blue w-20 font-Space-Mono text-white px-2 rounded-xl font-medium">Search</button>
    </motion.div>
    <motion.div className="w-full max-w-mob-search flex flex-row dark:bg-dark-blue rounded-2xl h-mob-container mx-auto">
      <div>
        <img src={Info.avatar_url} className="w-mob-profile h-mob-profile rounded-full" alt="profic picture" />
      </div>
    </motion.div>
    {/* <h1>{Info.name}</h1>
    <h1>{Info.bio}</h1> */}
  </div>
  )
}

export default Home
