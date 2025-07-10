import React from 'react'

export default function MaxWidthWrapper({children}) {
  return (
      <div className='max-w-screen-2xl mx-auto'>{children}</div>
  )
}

//max-w-screen-2xl
//Ensures the content doesn’t stretch too far on ultra - wide monitors.
//and appearances do remain same as they are