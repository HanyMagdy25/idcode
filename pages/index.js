import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Content from '@/components/Content/Content'
import ProgLangs from '@/components/ProgLangs/ProgLangs'
import Hero from '@/components/Hero/Hero'
import Navigation from '@/components/Navigation/Navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>IDCode Test Hany</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {/* <Navbar/> */}
        <Navigation/>
        <Hero/>
        <Content/>
        <ProgLangs/>
      </main>
    </>
  )
}
