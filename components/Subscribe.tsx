import { useState } from 'react'
import { classNames } from '@/utils/helpers'

function Subscribe({ setSubscribed }: { setSubscribed: any }) {
  const [clicked, setClicked] = useState(false)

  async function handleSubmit(e: any) {
    e.preventDefault()
    setClicked(true)
    const email = e.target['email'].value
    await fetch('api/subscribe', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
    setSubscribed(true)
  }

  return (
    <form
      className='flex flex-shrink w-full mt-8 max-w-lg'
      onSubmit={handleSubmit}
    >
      {' '}
      <label htmlFor='email' className='sr-only'>
        Email
      </label>
      <input
        className='border text-gray-600 px-3 border-r-0 border-purple-100 rounded-l-lg w-2/3
              focus:outline-none focus:ring-1 focus:ring-purple-600'
        type='email'
        name='email'
        required
        placeholder='Your email here'
      />
      <button
        type='submit'
        className={classNames(
          clicked ? 'pointer-events-none	opacity-75' : '',
          `py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-600`
        )}
      >
        Subscribe
      </button>
    </form>
  )
}

export default Subscribe
