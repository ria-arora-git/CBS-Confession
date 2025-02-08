import React from 'react';

function Card({ content, date }) {
  console.log(content);
  return (
    <div className='w-2/3 border rounded-md p-8 flex flex-col gap-8 m-2'>
      <p>
        {content}
      </p>
      <p className='text-zinc-500'>
        {`Posted on ${date}`}
      </p>
    </div>
  );
}

export default Card;

