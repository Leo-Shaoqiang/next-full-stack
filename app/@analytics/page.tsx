// async function getData () {
//   await new Promise(resolve => setTimeout(resolve, 3000))
//   // throw new Error('Error from analytics')
//   return {
//     message: 'Hello, analytics!'
//   }
// }
// export default async function analytics (props) {
//   const { message } = await getData()
//   return <h1>{message}</h1>
// }

// app/@analytics/page.js
export default function Page () {
  return <h1>Hello, Analytics!</h1>
}
