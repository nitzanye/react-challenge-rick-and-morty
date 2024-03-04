import React, { useState } from 'react';

export const Image = ({ fullName, onChange }) => {
  const [liked, setLiked] = useState(false);
  const handleLiked = () => {
    setLiked(!liked);
    onChange();
  };

  return (
    <div className='image-container'>
      <img src={`images/${fullName}.jpeg`} className='cardImage' alt='' />
      <button
        className='icon-button'
        onClick={handleLiked}
        aria-label={liked ? 'Unlike' : 'Like'} // Accessibility feature
      >
        {liked ? (
          <img src='/icons/heart-fill.png' alt='Filled heart' />
        ) : (
          <img src='/icons/heart-empty.png' alt='Empty heart' />
        )}
      </button>
    </div>
  );
};
