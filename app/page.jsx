import Card from '@/components/Card.jsx';
import { getPosts } from '@/server/actions';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

export const dynamic = 'force-dynamic';

async function Page() {
  const posts = await getPosts();
  const formattedPosts = posts.map(post => ({
    ...post,
    date: new Date(post.date).toLocaleDateString(), 
  }));

  return (
    <>
      <Head>
        <title>CBS Confessions</title>
        <meta name="description" content="Safe space for your daily vents" />
      </Head>
      <div className='h-[100vh] bg-gradient-to-b ' style={{ backgroundImage: "url('/pink.avif')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-screen h-[90vh] flex flex-col items-center bg-gradient-to-b'>
          <header className='w-full lg:h-[15vh] h-[12vh] shadow-zinc-100 shadow-md flex justify-center items-center px-12 flex-col'>
            <h1 className='text-5xl font-bold'>CBS Confessions</h1>
            <p className='text-xl mt-2'>Safe space for your daily vents</p>
          </header>
          <div className='w-screen h-[75vh] flex-2 overflow-y-auto lg:w-2/3 p-4 flex flex-col items-center scrollbar-hide mt-6'>
            {formattedPosts.map((post, index) => (
              <Card
                key={index}
                cid={post.cid}
                content={post.content}
                date={post.date}
                initialReactions={{ like: post.like, love: post.love, laugh: post.laugh, cry:post.cry }}
              />
            ))}
          </div>
        </div>
        <div className='w-full h-[10vh] flex justify-end items-end bg-opacity-0'>
          <Link href={'/create'} className='border w-16 h-16 text-blue-950 bg-white rounded-full text-5xl font-semibold flex justify-center items-center m-10'>+</Link>
        </div>
      </div>
    </>
  );
}

export default Page;
