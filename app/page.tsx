"use client"

import {redirect} from "next/navigation";
import {getSession, login, logout} from './lib'
import { useEffect, useState } from "react";

export default function Login() {
  const [session, setSession] = useState(null);
  useEffect(function(){
    getSession().then(result => setSession(result));
  },[session])
  return(
    <section>
      <form action={
        async(formdata) =>{
          var success = await login(formdata);
          if(success){redirect('/home');}else{
            console.log('login failed')
          }
        }}
        ><input type="email" name="email" id="email"/>
        <input type="password" name="password" id="password"/>
        <input type="submit" name="submit" id="submit"/>
        </form>

        <form action={
        async(formdata) =>{
          await logout();
          redirect('/');
        }}><button type='submit'>Logout</button>
        {/* <pre>{JSON.stringify(session,null,2)}</pre> */}
        </form>
    </section>
  );
}
