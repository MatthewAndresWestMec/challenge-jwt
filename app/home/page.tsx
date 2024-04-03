import React from 'react'
import {redirect} from "next/navigation";
import Link from "next/link";
import {logout} from '../lib'
const Home = () => {
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
    <h1>HERE IS THE HOME PAGE</h1>
    </div>
  )
}

export default Home