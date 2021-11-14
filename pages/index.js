import Head from 'next/head'
import { Container } from 'react-bootstrap'
import About from '../components/About'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Projects from '../components/Projects'

function Home() {
  return (
    <Container className="p-0" fluid>
      <Head>
        <title>Sagar Betkar</title>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="sagar betkar, sagarbetkar, sagar betkar resume, sagar betkar details, sagar betkar history, sagar betkar portfolio"
        />
        <meta name="description" content="Sagar Betkar portfolio website build with react." />
        <meta name="revised" content="Sagar Betkar, 13/11/2021" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </Container>
  )
}

export default Home
