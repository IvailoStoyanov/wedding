import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RsvpFormToggler from '../components/RsvpFormToggler'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RSVP за сватбата на Иво и Ради</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
        {/* <Header title="This will be our wedding app" /> */}
      <RsvpFormToggler />

      <Footer />
    </div>
  )
}
