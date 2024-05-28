import React from 'react';

const ShowPhrase = ({randomPhrase}) => {

  const {phrase, author} = randomPhrase

  return (
    <div className='text'>
        <p>{phrase}</p>
        <p>{author}</p>
    </div>
  )
}

export default ShowPhrase;