// app/page.js
import Link from 'next/link'
import { photos } from './data'

export default function Home () {
  debugger
  return (
    <main className='container'>
      {photos.map(({ id, src }) => (
        <Link key={id} href={`/photo/${id}`}>
          <img width='100' src={src} />
        </Link>
      ))}
    </main>
  )
}
