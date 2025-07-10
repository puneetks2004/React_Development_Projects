import React from 'react'
import MaxWidthWrapper from './ui/max-width-wrapper'

export default function Hero() {
  return (

    <MaxWidthWrapper>
      <div className='mb-0 p-8 text-center m-10 space-y-4 max-w-2xl mx-auto' >
        <h1 className='text-indigo-600 font-bold text-5xl'>NewsHub</h1>
        <h2 className='text-xl text-gray-600'>Stay informed with the latest news from around the world. Choose your preferred categories and discover stories that matter to you.</h2>
      </div>
     </MaxWidthWrapper>
  )//wrapping of content of hero.jsx inside maxwidthwrapper that goes through props and rest properties are set as defined in max-width-wrapper component
}

//space-y-4 rather it you can use flex, flex-col,gap-4
//It adds 1rem (16px) of vertical space between each direct child element inside a parent.


//mx-auto
//✅ What mx-auto does:
//It sets the left and right margins to auto.


//✅ What max - w - 2xl does:
//It limits the maximum width of an element to 42rem(which is 672px).