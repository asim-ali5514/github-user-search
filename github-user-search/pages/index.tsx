import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import { m, motion } from "framer-motion"
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

  const Months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]

  const dateString = String(Info.created_at)
  const fullDate : any = dateString.substring(0, 10)
  const secondMonth = fullDate[5] + fullDate[6] -1
  return (
  <div className="bg-snow flex h-screen flex-col gap-4  dark:bg-dark-mode-bg transition duration-75">
    <Navbar/>
    <motion.div initial={{y : -150}} animate={{y : 0}} className="flex flex-row items-center px-3 mx-auto gap-2 h-16 rounded-2xl dark:bg-dark-blue bg-white shadow-xl w-full max-w-mob-search">
      <Image src={search} alt="search icon"/>
      <input onChange={(e) => setUser(e.target.value)} type="text" className="bg-transparent outline-none dark:text-white text-sm font-Space-Mono w-full" placeholder="Search GitHub username..." />
      <motion.button whileHover={{scale : 1.1}} whileTap={{scale : 0.9}} onClick={() => fetchData()} className="h-11 bg-sky-blue w-20 font-Space-Mono text-white px-2 rounded-xl font-medium">Search</motion.button>
    </motion.div>
    <motion.div className="w-full max-w-mob-search shadow-lg flex flex-row dark:bg-dark-blue rounded-2xl h-mob-container mx-auto">
      <div className="flex flex-row gap-5 ml-6 mt-6">
        <motion.img initial={{y : -50 , opacity : 0}} animate={{y : 0 , opacity : 1 }} transition={{duration : 0.6}} src={Info.avatar_url} className="w-mob-profile h-mob-profile rounded-full" alt="profic picture" />
        <div>
          <motion.h2 initial={{y : -80 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{ duration : 0.7}} className="font-Space-Mono font-bold text-base dark:text-white">{Info.name}</motion.h2>
          <a href={Info.html_url} target="_blank" >
            <motion.h3 initial={{y : -100 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{ duration : 0.9}}  className="font-Space-Mono text-sky-blue">{'@' + Info.login}</motion.h3>
          </a>
          <h3 className="font-Space-Mono text-sm dark:text-white text-light-grey">
            {"Joined" + ' ' + fullDate[8] + fullDate[9] + ' ' + Months[secondMonth] + ' ' + fullDate[0] + fullDate[1] + fullDate[2] + fullDate[3]}
          </h3>
        </div>
      </div>
    </motion.div>
    {/* <h1>{Info.name}</h1>
    <h1>{Info.bio}</h1> */}
  </div>
  )
}

export default Home
