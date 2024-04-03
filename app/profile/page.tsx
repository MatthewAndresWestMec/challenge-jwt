import React from 'react'
import {getSession ,login, logout } from '../lib'
import Link from "next/link";
import {redirect} from "next/navigation";


const profile = async () => {
var session = await getSession()
  return (
    <div>
      <nav>
      <ul>
        <li><h1><Link href='/home'>Home</Link></h1></li>
        <li><h1><Link href='/profile'>Profile</Link></h1></li>
        <li><form action={
        async(formdata) =>{
          'use server' 
          await logout();
          redirect('/');
        }}><button type='submit'>Logout</button></form></li>
      </ul>
    </nav>

      <h1>Welcome, {session.user.name}</h1>
      <h1>EMAIL</h1>
      <h2>{session.user.email}</h2>
      <h1>PASSWORD</h1>
      <h2>{session.user.password}</h2>

    </div>
  )
}

export default profile;