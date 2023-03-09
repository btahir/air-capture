import React from 'react'
import { getSubscribers } from '@/lib/airtable'

type Props = {
  subscribers: [email: string]
}

function AdminPage({ subscribers }: Props) {
  return (
    <div className='bg-gradient-to-tr from-red-500 to-purple-400 text-white min-h-screen px-4 py-12 sm:py-16 relative'>
      <div className='w-full max-w-lg mx-auto bg-gray-800 p-6 rounded-2xl'>
        <h1 className='text-center text-3xl sm:text-4xl md:text-5xl md:leading-snug font-extrabold mb-12'>
          Subscriber List
        </h1>
        <ul className='space-y-2'>
          {subscribers.map((subscriber: any) => (
            <li
              key={subscriber.email}
              className='list-decimal list-inside text-sm sm:text-base'
            >
              {subscriber.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps(context: any) {
  return {
    props: {
      subscribers: await getSubscribers(),
    },
    revalidate: 86400,
  }
}

export default AdminPage
