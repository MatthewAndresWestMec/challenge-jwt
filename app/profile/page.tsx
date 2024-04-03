"use client"
import React from 'react'
import {getSession} from '../lib'


const profile = async () => {
var session = await getSession()
console.log(session)
console.log(session.user)
console.log(session.user.email)
  return (
    <div>
      <h1>Welcome, </h1>
      <h1>EMAIL</h1>
      <h2></h2>
      <h1>PASSWORD</h1>
      <h2></h2>
      <h1>NAME</h1>
      <h2></h2>

    </div>
  )
}

export default profile;