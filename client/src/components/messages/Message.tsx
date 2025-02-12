import React from 'react'

const Message = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
  {/* Left (Incoming) Message */}
  <div className="flex items-start gap-2">
    <img
      className="w-10 h-10 rounded-full"
      src="https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg"
      alt="Obi-Wan Avatar"
    />
    <div>
      {/* Header (Name & Timestamp) */}
      {/* <div className="text-sm text-gray-300">
        Obi-Wan Kenobi <span className="text-xs opacity-50 ml-2">12:45</span>
      </div> */}
      {/* Chat Bubble */}
      <div className="bg-gray-800 text-white px-4 py-2 rounded-lg max-w-xs">
        You were the Chosen One!
      </div>
      {/* Footer (Status) */}
      <div className="text-xs opacity-50">Delivered</div>
    </div>
  </div>

  {/* Right (Outgoing) Message */}
  <div className="flex items-start gap-2 justify-end">
    <div className="text-right">
      {/* Header (Name & Timestamp) */}
      {/* <div className="text-sm text-gray-300">
        Anakin <span className="text-xs opacity-50 ml-2">12:46</span>
      </div> */}
      {/* Chat Bubble */}
      <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
        I hate you!
      </div>
      {/* Footer (Seen Status) */}
      <div className="text-xs opacity-50">Seen at 12:46</div>
    </div>
    <img
      className="w-10 h-10 rounded-full"
      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      alt="Anakin Avatar"
    />
  </div>
</div>

    </div>
  )
}

export default Message
