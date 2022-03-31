import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black">
      <Head>
        <title>BEKACHI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Welcome to
        </h1>

        <img src="/bekachi.png" className="my-6 w-8/12 lg:w-4/12" alt="" />
<br /> 
        <p className="text-white">
          We are coming soon..
        </p>
 
      </main>

     
    </div>
  )
}

export default Home
