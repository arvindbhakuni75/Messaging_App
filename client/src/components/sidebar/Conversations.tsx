import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto sm:h-[310px] md:h-[410px] mb-2 overflow-y-auto'>
      {
        [...Array(10)].map((_, i) => (
          <Conversation key={i} />
        ))
      }
    </div>
  )
}

export default Conversations
