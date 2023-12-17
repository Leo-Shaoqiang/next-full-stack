// /pages/post/[id].js
export default async function Blog ({ params }) {
  console.log('🚀 ~ file: page.tsx:3 ~ Blog ~ params:', params)

  // 如果路由地址为 /posts/1, params.id 为 1
  const post = (await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {
      next: { revalidate: 3600 }
    }
  )) as any
  console.log('🚀 ~ file: page.tsx:12 ~ Blog ~ post:', post)

  return (
    <>
      <header>{post.id}</header>
    </>
  )
}

export function generateStaticParams () {
  return []
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const posts = await res.json()
  // const paths = posts.map(post => ({
  //   params: { id: String(post.id) }
  // }))
  // // { fallback: false } 意味着当访问其他路由的时候返回 404
  // return { paths, fallback: false } as any
}
