import Airtable from 'airtable'

const base = new Airtable({
  apiKey: process.env.AIRTABLE_ACCESS_TOKEN,
}).base(process.env.AIRTABLE_BASE_ID || '')

export default async function applicationAPI(req: any, res: any) {
  const data = req.body

  try {
    await base('Waitlist').create([
      {
        fields: {
          Email: data.email,
        },
      },
    ])
    res.status(200).json({ status: 'Success!' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ status: 'Something went wrong! 😕' })
  }
}
