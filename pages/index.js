import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Profile from '../components/Profile'

function Home() {
  return (
    <Container className="p-0" fluid>
      <Head>
        <title>Sagar Betkar</title>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, 
          shrink-to-fit=no"
        />
        <meta name="description" content="JavaScript wizard, chaotic good" />
        <meta name="keyword" content="sagarbetkar, sagar, betkar, portfolio, javascript, developer"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Profile />
      <Footer />
    </Container>
  )
}

export default Home
