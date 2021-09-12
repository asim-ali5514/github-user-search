import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import { useState, useEffect } from 'react'
const Home: NextPage = () => {
  const [theme , setTheme ] = useState("dark")
  const colorTheme = theme ===  'dark' ? 'light' : 'dark'
  useEffect(() => {
      const root = window.document.documentElement
      root.classList.remove(colorTheme)
      root.classList.add(theme)
  },[theme , colorTheme])
  return (
    <div>
      <button onClick={() => setTheme(colorTheme)}>Dark</button>
      <h1 className="text-red-700 dark:text-blue-900">hello</h1>
    </div>
  )
}

export default Home
