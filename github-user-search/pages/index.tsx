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
import location from "../public/icon-location.svg"
const Home: NextPage = () => {
  const [User, setUser] = useState('octocat')
  const [Info, setInfo] = useState<any>([])
  const [valid, setValid] = useState<any>(true)
  const fetchData = () => {
    return axios.get(`https://api.github.com/users/${User}`)
    .then((res) => {
      setInfo(res.data)
      setValid(true)
      return res.data
    })
    .catch((err) => {
      console.log(err)
      setValid(false)
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
    <motion.div initial={{y : -150}} animate={{y : 0}} className="flex md:w-4/5 md:max-w-md-width  flex-row items-center px-3 mx-auto gap-2 h-16 rounded-2xl dark:bg-dark-blue bg-white shadow-xl w-full max-w-mob-search">
      <Image src={search} alt="search icon"/>
      <input onChange={(e) => setUser(e.target.value)} type="text" className="bg-transparent outline-none dark:text-white text-sm font-Space-Mono w-full" placeholder="Search GitHub username..." />
      <p className={`w-40 text-red-600 font-Space-Mono font-semibold ${!valid ? 'flex' : 'hidden'}`}>No Results</p>
      <motion.button whileHover={{scale : 1.1}} whileTap={{scale : 0.9}} onClick={() => fetchData()} className="h-11 bg-sky-blue w-20 font-Space-Mono text-white px-2 rounded-xl font-medium">Search</motion.button>
    </motion.div>
    <motion.div className="w-full md:w-4/5 md:max-w-md-width gap-7 max-w-mob-search shadow-lg flex flex-col dark:bg-dark-blue rounded-2xl h-mob-container mx-auto">
      <div className="flex flex-row gap-5 ml-6 mt-6 md:items-center md:mt-10">
        <motion.img initial={{y : -50 , opacity : 0}} animate={{y : 0 , opacity : 1 }} transition={{duration : 0.6}} src={Info.avatar_url} className="w-mob-profile h-mob-profile rounded-full md:w-tablet-profile md:h-tablet-profile" alt="profic picture" />
        <div className="flex flex-col gap-1  lg:grid lg:grid-cols-2">
          <motion.h2 initial={{y : -80 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{ duration : 0.7}} className="font-Space-Mono font-bold text-base dark:text-white md:text-2xl">{Info.name}</motion.h2>
          <a href={Info.html_url} target="_blank" >
            <motion.h3 initial={{y : -100 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{ duration : 0.9}}  className="font-Space-Mono lg:hidden text-sky-blue md:text-base">{'@' + Info.login}</motion.h3>
          </a>
          <motion.h3 initial={{y : -100 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{ duration : 0.9}}  className="font-Space-Mono hidden lg:flex text-sky-blue md:text-base">{'@' + Info.login}</motion.h3>
          <motion.h3 initial={{y : -110 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{duration : 1}}  className="font-Space-Mono text-sm dark:text-white text-light-grey md:text-base ">
            {"Joined" + ' ' + fullDate[8] + fullDate[9] + ' ' + Months[secondMonth] + ' ' + fullDate[0] + fullDate[1] + fullDate[2] + fullDate[3]}
          </motion.h3>
        </div>
      </div>
      <motion.p initial={{y : -120 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{duration : 1.2}} className={`font-Space-Mono text-sm leading-6 md:text-base ml-6 w-72 md:w-11/12  ${!Info.bio ? 'text-light-grey' : 'text-navy-blue dark:text-white'}`}>{Info.bio !== null ? Info.bio : 'This profile has no bio'}</motion.p>
      <motion.div initial={{y : -130 , opacity : 0}} animate={{y : 0 , opacity : 1}} transition={{duration : 1.4}} className="dark:bg-dark-mode-bg font-Space-Mono place-items-center pr-3 dark:text-white w-72 h-20 ml-6 rounded-2xl  bg-blue-50 grid grid-cols-3 md:w-11/12 ">
        <p className=" text-navy-blue text-sm dark:text-white">Repos</p>
        <p className="text-navy-blue text-sm dark:text-white">Followers</p>
        <p className="text-navy-blue text-sm dark:text-white">Following</p>
        <p className="text-xl font-bold">{Info.public_repos}</p>
        <p className="text-xl font-bold">{Info.followers}</p>
        <p className="text-xl font-bold">{Info.following}</p>
      </motion.div>
      <motion.div initial={{opacity : 0 , y : -150}} animate={{opacity : 1 , y : 0}} transition={{duration : 1.5}} className="flex flex-col ml-5 mt-6 gap-4 md:grid md:grid-cols-2">
        <div className="flex flex-row gap-5">
            <svg height="20" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.797 3.425C11.584 1.33 9.427.05 7.03.002a7.483 7.483 0 00-.308 0C4.325.05 2.17 1.33.955 3.425a6.963 6.963 0 00-.09 6.88l4.959 9.077.007.012c.218.38.609.606 1.045.606.437 0 .828-.226 1.046-.606l.007-.012 4.96-9.077a6.963 6.963 0 00-.092-6.88zm-5.92 5.638c-1.552 0-2.813-1.262-2.813-2.813s1.261-2.812 2.812-2.812S9.69 4.699 9.69 6.25 8.427 9.063 6.876 9.063z" fill="current" className={`fill-current ${!Info.location ? 'text-light-grey' : 'dark:text-white text-navy-blue'}`}/></svg>
            <p className={`font-Space-Mono ${!Info.location  ? 'text-light-grey' : 'text-navy-blue dark:text-white'}`}>{!Info.location ? 'Not Available' : Info.location}</p>
        </div>
        <div className="flex flex-row gap-4  ">
          <svg height="20" width="20" className={`fill-current ${!Info.blog ? 'text-light-grey' : 'text-navy-blue dark:text-white'}`} xmlns="http://www.w3.org/2000/svg"><g fill="current"><path d="M7.404 5.012c-2.355 2.437-1.841 6.482.857 8.273.089.06.207.048.283-.027.568-.555 1.049-1.093 1.47-1.776a.213.213 0 00-.084-.3A2.743 2.743 0 018.878 10.1a2.64 2.64 0 01-.223-1.803c.168-.815 1.043-1.573 1.711-2.274l-.004-.002 2.504-2.555a2.568 2.568 0 013.648-.019 2.6 2.6 0 01.037 3.666l-1.517 1.56a.266.266 0 00-.06.273c.35 1.012.435 2.44.201 3.519-.006.03.031.05.053.028l3.228-3.295c2.062-2.105 2.044-5.531-.04-7.615a5.416 5.416 0 00-7.691.04L7.417 4.998l-.013.014z"/><path d="M13.439 13.75a.401.401 0 00.006-.003c.659-1.204.788-2.586.48-3.933l-.002.002-.001-.001a5.434 5.434 0 00-2.19-3.124.3.3 0 00-.333.015c-.553.448-1.095 1.021-1.452 1.754a.243.243 0 00.096.317c.415.24.79.593 1.04 1.061h.001c.196.33.388.958.263 1.632-.116.894-1.019 1.714-1.736 2.453-.546.559-1.935 1.974-2.49 2.542a2.6 2.6 0 01-3.666.037 2.6 2.6 0 01-.038-3.666l1.521-1.564A.266.266 0 005 11.004c-.338-1.036-.43-2.432-.217-3.51.006-.03-.031-.049-.053-.027l-3.179 3.245c-2.083 2.126-2.066 5.588.04 7.693 2.125 2.083 5.57 2.048 7.653-.078.723-.81 3.821-3.678 4.195-4.577z"/></g></svg>
          <a href={Info.blog} className={`font-Space-Mono break-words w-4/5  ${!Info.blog  ? 'text-light-grey ' : 'text-light-grey  dark:text-white'}`}>{!Info.blog ? 'Not Available' : Info.blog}</a>
        </div>
        <div className="flex flex-row gap-4">
          <svg height="18" width="20" className={`fill-current ${!Info.twitter_username ? 'text-light-grey' : 'text-navy-blue dark:text-white'}`} xmlns="http://www.w3.org/2000/svg"><path d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z" fill="current"/></svg>
          <a className={`font-Space-Mono ${!Info.twitter_username  ? 'text-light-grey bg-transparent' : 'text-light-grey bg-transparent dark:text-white'}`} href={'https://twitter.com/' + Info.twitter_username}> <p> {!Info.twitter_username ? 'Not Available' : Info.twitter_username} </p></a> 
        </div>
        <div className="flex flex-row gap-4">
          <svg height="20" className={`fill-current ${!Info.company ? 'text-light-grey' : 'text-navy-blue dark:text-white'}`} width="20" xmlns="http://www.w3.org/2000/svg"><g fill="current"><path d="M10.858 1.558L1.7.167A1.477 1.477 0 00.517.492 1.49 1.49 0 000 1.608v17.559c0 .458.375.833.833.833h2.709v-4.375c0-.808.65-1.458 1.458-1.458h2.083c.809 0 1.459.65 1.459 1.458V20h3.541V3a1.46 1.46 0 00-1.225-1.442zM4.583 12.292h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm4.167 7.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5H7.5a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zM18.85 9.035l-5.933-1.242V20h5.625A1.46 1.46 0 0020 18.542V10.46c0-.688-.47-1.274-1.15-1.425zM16.875 17.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25zm0-2.5h-1.25a.625.625 0 010-1.25h1.25a.625.625 0 010 1.25z"/></g></svg>
          <a href={`https://github.com/${Info.company}`} className={`font-Space-Mono ${!Info.company ? 'text-light-grey' : 'text-navy-blue dark:text-white'}`}>{!Info.company ? 'Not Available' : Info.company}</a>
        </div>
      </motion.div>
    </motion.div>
  </div>
  )
}

export default Home
