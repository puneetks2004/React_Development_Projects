// import React, { useState } from 'react'
// import Button from './ui/button'
// import MaxWidthWrapper from './ui/max-width-wrapper'

// const links = [
//   {
//     name: "📰 General",
//     link: "#",
//   },
//   {
//     name: "💼 Business",
//     link: "#",
//   },
//   {
//     name: "🎬 Entertainment",
//     link: "#",
//   },
//   {
//     name: "❤️‍🩹 Health",
//     link: "#",
//   },
//   {
//     name: "🔭 Science",
//     link: "#",
//   },
//   {
//     name: "🎾 Sports",
//     link: "#",
//   },
//   {
//     name: "💻 Technology",
//     link: "#",
//   }

// ]

// export default function Category() {
//   const [active, setActive] = useState(0)
  
//   return (
//     <MaxWidthWrapper>
//       <h1 className='px-8 text-2xl font-bold text-center'>Choose Your News Category</h1>
//       <div className='flex gap-4 max-w-screen-xl mx-auto items-center justify-center flex-wrap mt-6'>
//         {links.map((link, index) => (
//           <Button key={index} className={`${active === index ? "bg-gradient-to-r from-indigo-500 from-60% to-purple-500 text-white" : "bg-white border border-gray-200 text-black"}`} onClick={() => {
//             setActive(index)
//           }}>
//             <a href={link.link}>{link.name}</a>
//           </Button>
//         ))}
//       </div>
//     </MaxWidthWrapper>
//   )
// }


// //window+dot to open to add icons