import Airtable from 'airtable'

const base = new Airtable({
  apiKey: process.env.AIRTABLE_ACCESS_TOKEN,
}).base(process.env.AIRTABLE_BASE_ID || '')

export function getSubscribers() {
  let totalRecords: any = []

  return new Promise((resolve, reject) => {
    base('Subscribers')
      .select({
        maxRecords: 1000, // can set max records if you want to limit
        pageSize: 100,
      })
      .eachPage(
        function page(records: any, fetchNextPage: any) {
          records.forEach((record: any) => {
            const email = record.get('Email') || ''

            if (!email) return

            totalRecords.push({
              email,
            })
          })

          fetchNextPage()
        },
        function done(err: any) {
          if (err) return reject(err)

          return resolve(totalRecords)
        }
      )
  })
}
