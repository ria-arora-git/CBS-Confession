import Card from '@/components/Card.jsx'
import { getPosts } from '@/server/actions'
import Link from 'next/link'
import React from 'react'

async function Page() {
  const posts = await (await getPosts()).reverse()

  console.log("Data Get")

  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <header className='w-full shadow-zinc-100 shadow-md flex justify-between items-center px-12'>
        <h1 className='text-2xl font-bold'>CBS Confessions</h1>
        <Link href={'/create'} className='border w-10 h-10 text-black bg-white rounded-full text-2xl font-bold flex justify-center items-center'>+</Link>
      </header>
      <div className='flex-1 overflow-y-auto w-3/5 p-10 flex flex-col items-center'>
        {posts.map((post, index) => (
          <Card key={index} content={post.content} date={post.date}/>
        ))}
      </div>
    </div>
  )
}

export default Page
