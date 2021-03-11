import Head from 'next/head'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Hero from '../components/Hero'
import About from '../components/About'
import SectionHeading from '../components/SectionHeading'
import Portfolio from '../components/Portfolio'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Web Developer and Designer Patryk Adach's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Section component={<Hero />} />
        <About />

        <Section heading={<SectionHeading />} component={<SectionHeading />} />


        <Portfolio />

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  )
}
