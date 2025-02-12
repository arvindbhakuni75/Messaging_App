// import React from "react";

// const Conversation = () => {
//   const isOnline = true;
//   return (
//     <>
//       <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-3 cursor-pointer">
//         <div className="relative w-12 h-12">
//           {/* Avatar Image */}
//           <img
//             src={"https://img.freepik.com/premium-photo/beautiful-egirl-woman-portrait_691560-640.jpg"}
//             alt="User Avatar"
//             className="w-full h-full rounded-full border-2 border-gray-800 shadow-md"
//           />

//           {/* Status Indicator */}
//           <span
//             className={`absolute top-1 right-1 w-3 h-3 rounded-full border-2 border-gray-300 ${
//               isOnline ? "bg-green-500" : "bg-gray-400"
//             }`}
//           />
//         </div>
//         <div className="flex flex-col flex-1">
//             <div className="flex gap-3 justify-between">
//                 <p className="font-bold text-gray-200">John Doe</p>
//                 <span className="text-xl">🐯</span>
//             </div>
//         </div>
//       </div>
//       <hr className="w-full  bg-gray-100 my-0 py-0 opacity-20" />

//     </>
//   );
// };

// export default Conversation;




import React from "react";

const conversations = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://i.pinimg.com/736x/e9/3c/e7/e93ce71620845fd40020fb0b109bca47.jpg",
    isOnline: true,
    emoji: "🐯",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg",
    isOnline: false,
    emoji: "🌸",
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "https://img.freepik.com/free-photo/young-adult-woman-sunglasses-exudes-elegance-generative-ai_188544-7652.jpg",
    isOnline: true,
    emoji: "🚀",
  },
];

const Conversation = () => {
  return (
    <>
      {conversations.map((user) => (
        <div key={user.id}>
          <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-3 cursor-pointer">
            <div className="relative w-12 h-12">
              {/* Avatar Image */}
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-full h-full rounded-full border-2 border-gray-800 shadow-md"
              />

              {/* Status Indicator */}
              <span
                className={`absolute top-1 right-1 w-3 h-3 rounded-full border-2 border-gray-300 ${
                  user.isOnline ? "bg-green-500" : "bg-gray-400"
                }`}
              />
            </div>
            <div className="flex flex-col flex-1">
              <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{user.name}</p>
                <span className="text-xl">{user.emoji}</span>
              </div>
            </div>
          </div>
          <hr className="w-full bg-gray-100 my-0 py-0 opacity-20" />
        </div>
      ))}
    </>
  );
};

export default Conversation;
