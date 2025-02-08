'use client'

import React, { useState } from 'react';
import { updateReactions } from '@/server/actions';

function Card({ cid, content, date, initialReactions }) {
  const [showOptions, setShowOptions] = useState(false);
  const [emojiReactions, setEmojiReactions] = useState(initialReactions);

  async function handleReaction(type) {
    try {
      const response = await updateReactions(cid, type);
      if (response.success) {
        setEmojiReactions({ ...emojiReactions, [type]: emojiReactions[type] + 1 });
      }
    } catch (error) {
      console.error(`Error updating ${type} reaction:`, error);
    }
  }

  return (
    <div className='relative w-2/3 border border-white/50 rounded-lg p-6 flex flex-col gap-6 mt-2 mb-3 bg-white/20 backdrop-blur-lg'>
      <div className="absolute top-2 right-2 cursor-pointer" onClick={() => setShowOptions(!showOptions)}>
        &#x22EE; {/* Unicode for vertical ellipsis */}
      </div>
      <p>
        {content}
      </p>
      <div className='flex justify-between'>
        <div>
          <p className='text-white/60 flex right-2 items-start'>
            {`Posted on ${date}`}
          </p>
        </div>
        <div className="flex justify-start gap-2">
          <button onClick={() => handleReaction('like')} className="flex items-center text-lg gap-1">
            👍  <span>{emojiReactions.like}</span>
          </button>
          <button onClick={() => handleReaction('love')} className="flex items-center text-lg gap-1">
            ❤️ <span>{emojiReactions.love}</span>
          </button>
          <button onClick={() => handleReaction('laugh')} className="flex items-center text-lg gap-1">
            😂 <span>{emojiReactions.laugh}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
