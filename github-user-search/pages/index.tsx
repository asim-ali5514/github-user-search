import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import { motion } from "framer-motion"
import search from '../public/icon-search.svg'
const Home: NextPage = () => {
  return (
  <div className="bg-snow flex h-screen flex-col  dark:bg-dark-mode-bg transition duration-75">
    <Navbar/>
    <div className="flex flex-row items-center px-3 mx-auto gap-2 h-16 rounded-2xl bg-dark-blue w-full max-w-mob-search">
      <Image src={search} alt="search icon"/>
      <input type="text" className="bg-transparent text-sm font-Space-Mono w-full" placeholder="Search GitHub username..." />
      <button className="h-11 bg-sky-blue w-20 font-Space-Mono text-white px-2 rounded-xl font-medium">Search</button>
    </div>
  </div>
  )
}

export default Home
