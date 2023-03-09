import Airtable from 'airtable'

const base = new Airtable({
  apiKey: process.env.AIRTABLE_ACCESS_TOKEN,
}).base(process.env.AIRTABLE_BASE_ID || '')

export default async function handler(req: any, res: any) {
  const data = req.body

  try {
    // add record to Airtable
    await base('Subscribers').create([
      {
        fields: {
          Email: data.email,
        },
      },
    ])

    // Refresh Subscriber List
    await res.revalidate('/admin')

    res.status(200).json({ status: 'Success!' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'Something went wrong! 😕' })
  }
}
