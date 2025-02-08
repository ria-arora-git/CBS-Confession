'use client'

import React, { useState } from 'react';

function Card({ content, date }) {
  const [showOptions, setShowOptions] = useState(false);
  const [reports, setReports] = useState(0);
  const [emojiReactions, setEmojiReactions] = useState({ like: 0, love: 0, laugh: 0 });

  function handleReport() {
    setReports(reports + 1);
    if (reports + 1 >= 5) {
      alert("This card has been deleted due to multiple reports.");
    }
  }

  function handleReaction(type) {
    setEmojiReactions({ ...emojiReactions, [type]: emojiReactions[type] + 1 });
  }

  if (reports >= 5) {
    return null; // Card is deleted
  }

  return (
    <div className='relative w-2/3 border border-white/50 rounded-lg p-6 flex flex-col gap-6 mt-2 mb-3 bg-white/20 backdrop-blur-lg'>
      <div className="absolute top-2 right-2 cursor-pointer" onClick={() => setShowOptions(!showOptions)}>
        &#x22EE; {/* Unicode for vertical ellipsis */}
      </div>
      {showOptions && (
        <div className="absolute top-8 right-2 bg-white p-2 rounded shadow-lg">
          <button onClick={handleReport} className="block w-full text-left px-2 py-1 text-black">Report</button>
        </div>
      )}
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
