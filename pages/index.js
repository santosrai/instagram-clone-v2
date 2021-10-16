import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    {/* header */}
    <Header/>
    {/* Feed */}
    <Feed/>
    {/* modal */}
    <h2>thi is modal</h2>
    </div>
  )
}
