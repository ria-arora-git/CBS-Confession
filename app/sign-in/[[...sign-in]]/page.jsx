import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-black via-purple-600 to-violet-600'>
      <div className='text-3xl text-center m-8 text-white font-bold'>Please Sign In to proceed</div>
      <SignIn />
    </div>
  );
}

