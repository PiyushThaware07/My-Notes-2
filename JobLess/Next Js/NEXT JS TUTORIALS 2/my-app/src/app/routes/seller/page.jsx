import Navbar from '@/app/components/Navbar'
import React from 'react'

export default function page() {
  console.log(process.env.NODE_ENV);
  console.log(process.env.FNAME);
  console.log(process.env.LNAME);
  return (
    <div>
      <Navbar />
      <h1>Seller Route</h1>

      {
        process.env.NODE_ENV === "development"
          ?
          <>
            <h1>{">>"} You are in development mode</h1>
          </>
          :
          <>
            <h1>{">>"} You are in production mode</h1>
          </>
      }
    </div>
  )
}
