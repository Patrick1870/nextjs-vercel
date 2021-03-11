import Head from 'next/head'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Hero from '../components/Hero'
import About from '../components/About'
import SectionHeading from '../components/SectionHeading'
import Portfolio from '../components/Portfolio'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Web Developer and Designer Patryk Adach's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Section component={<Hero />} />
        <About />

        <Portfolio />

        <Skills />

      </main>

      <Footer />    

    </div>
  )
}
