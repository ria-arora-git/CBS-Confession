'use client'

import { createPost } from '@/server/actions'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function Page() {
    const router = useRouter()
    const [content, setContent] = useState('')

    const badWords = ["bhenchod", "chutiya", "lawda", "bakchod", "gandu"]; 

    async function HandleSubmit() {
        if (content.length < 10) {
            alert("too short")
            return
        }
        for (let word of badWords) {
            if (content.includes(word)) {
                alert("be respectful")
                return
            }
        }
        await createPost(content);
        router.push('/')
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center' style={{ backgroundImage: "url('/R-1.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='w-3/5 h-4/5 border rounded-2xl justify-center items-center flex p-10 flex-col mt-10 bg-white bg-opacity-10'>
                <div className='text-5xl'>
                    <h1 className='font-bold text-white'>Write a confession</h1>
                </div>
                <textarea onChange={(e) => setContent(e.target.value)} id="confession" className='flex-1 w-full h-full text-white border bg-transparent outline-none'></textarea>
                <button onClick={HandleSubmit} className='border w-full rounded-lg py-4 text-xl font-bold hover:bg-white hover:text-black'>Submit your confession</button>
            </div>
        </div>
    )
}

export default Page
