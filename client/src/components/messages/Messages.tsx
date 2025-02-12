import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='px-4 flex-1 overflow-auto'>
      { [...Array(4)].map((_, i)=> (
        <Message key={i} />
      ))}
    </div>
  )
}

export default Messages
