import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='p-4'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/blog">all posts</Link>
      </p>
    </div>
  )
}