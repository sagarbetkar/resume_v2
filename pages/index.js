import Head from "next/head";
import { Container } from "react-bootstrap";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";

function Home() {
  return (
    <Container className="p-0" fluid>
      <Head>
        <title>Sagar Betkar</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="author" content="Sagar Betkar" />
        <meta
          name="keywords"
          content="sagar, betkar, sagar betkar, sagarbetkar, sagar betkar resume, sagar betkar details, sagar betkar experiences, sagar betkar portfolio, sagar betkar projects, sagar betkar skills"
        />
        <meta
          name="description"
          content="Sagar Betkar is a full-stack developer. This portfolio website contains his information, contact details, skills, experiences, projects & resume. The website is built using Next.js"
        />
        <meta property="og:image" content="/logo.png" />
        <meta
          property="og:description"
          content="Sagar Betkar portfolio website which contains his information, contact details, skills, experiences, projects & resume. The website is built using Next.js"
        />
        <meta property="og:title" content="Sagar Betkar" />
        <meta name="twitter:title" content="Sagar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Profile />
      <About />
      <Experience />
      <Blogs />
      <Projects />
      <Footer />
    </Container>
  );
}

export default Home;
