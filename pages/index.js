import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RsvpForm from '../components/RsvpForm'
import Timetable from '../components/Timetable'
import DetailsSection from '../components/DetailsSection'
import { GuestsProvider } from '../contexts/GuestsContext';

export default function Home() {
  return (
    <div>
      <Head>
        <title>RSVP за сватбата на Иво и Ради</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header title="Ивайло Стоянов и Радина Рашкова RSVP покана" />
      <Timetable />
      <DetailsSection />

      <GuestsProvider>
        <RsvpForm />
      </GuestsProvider>
      <Footer />
    </div>
  )
}
