import { useState } from 'react'

function Subscribe({ setSubscribed }: { setSubscribed: any }) {
  const [email, setEmail] = useState('')
  const [clicked, setClicked] = useState(false)

  function classNames(...classes: String[]) {
    return classes.filter(Boolean).join(' ')
  }

  async function handleSubmit(e: any) {
    e.preventDefault()
    setClicked(true)
    await fetch('api/update-airtable', {
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
      <input
        className='border text-gray-600 px-3 border-r-0 border-purple-100 rounded-l-lg w-2/3
              focus:outline-none focus:ring-1 focus:ring-purple-600'
        type='email'
        required
        placeholder='Your email here'
        onChange={(e) => setEmail(e.target.value)}
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
