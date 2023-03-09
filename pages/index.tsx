import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Subscribe from '../components/Subscribe'

const Home: NextPage = () => {
  const [subscribed, setSubscribed] = useState(false)

  return (
    <div className='bg-gradient-to-tr from-red-500 to-purple-400 text-white relative h-screen w-screen'>
      <Head>
        <title>Airtable Capture</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <img
        className='absolute inset-0 w-full h-full object-cover mix-blend-multiply filter brightness-50'
        alt='main background image'
        src='https://source.unsplash.com/random'
      />

      <div className='absolute inset-0 flex justify-center items-center px-4'>
        <div className='w-full max-w-md backdrop-filter backdrop-blur-md backdrop-grayscale backdrop-brightness-50 rounded-2xl text-white py-12 px-4 sm:px-8'>
          {subscribed ? (
            <h1 className='font-extrabold text-white text-center text-3xl sm:text-4xl md:text-5xl md:leading-snug'>
              You have subscribed!
            </h1>
          ) : (
            <div>
              <h1 className='text-center text-3xl sm:text-4xl font-extrabold sm:leading-[3rem]'>
                Your headline here.{' '}
                <span className='text-purple-600'>Catch their attention!</span>
              </h1>
              <p className='mt-2 text-lg sm:text-xl'>
                Ea esse minim reprehenderit voluptate. Ea nisi culpa magna
                proident id voluptate. Sunt laborum laboris laborum laborum.
              </p>
              <Subscribe setSubscribed={setSubscribed} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
