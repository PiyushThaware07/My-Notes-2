import React from 'react'

export default function layout({children}) {
  return (
    <div>
      <h1 className='text-red-500'>College Layout</h1>
      {children}
    </div>
  )
}
