import React from 'react'
// * AUTH
import { UserButton } from "@clerk/nextjs";


export default function Files() {
  return (
    <div>
      <h1>files </h1>
      <UserButton afterSignOutUrl='/' />
    </div>
  )
}
