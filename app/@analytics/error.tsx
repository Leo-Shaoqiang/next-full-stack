'use client'

export default function analyticsError () {
  setTimeout(() => {
    throw new Error('analyticsError')
  }, 3000)

  return (
    <div className='max-w-5xl px-3 mx-auto'>
      <h1>analyticsError</h1>
    </div>
  )
}
