import Card from '@/components/Card.jsx';
import { getPosts } from '@/server/actions';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

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
          <header className='w-full lg:h-[15vh] md:h-[15vh] h-[20vh] shadow-zinc-100 shadow-md flex justify-center items-center px-12 gap-1 flex-col'>
            <div className='flex flex-col justify-center items-center '>
              <h1 className='text-4xl font-bold sm:text-4xl md:text-5xl lg:text-5xl'>CBS Confessions</h1>
              <p className='text-xl mt-2'>Safe space for your daily vents</p>
            </div>
            <div className=' gap-8 justify-end items-center lg:absolute lg:right-10 md:absolute md:right-10 hidden md:flex lg:flex'>
              <SignedOut>
                <SignInButton />
                <SignUpButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            <div className='md:hidden lg:hidden flex justify-center items-center'>
            <Link href={'/create'} className='border  text-blue-950 bg-white rounded-full text-xl font-semibold flex justify-center items-center m-2 p-2 py-1'> Add post </Link>
            </div>
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
        <div className='w-full h-[10vh] justify-end items-end bg-opacity-0 hidden md:flex lg:flex'>
          <Link href={'/create'} className='border w-16 h-16 text-blue-950 bg-white rounded-full text-5xl font-semibold flex justify-center items-center m-10'>+</Link>
        </div>
      </div>
    </>
  );
}

export default Page;
