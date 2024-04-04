'use client';

import { redirect } from 'next/navigation';
import { login, logout } from './lib';

export default function SignIn() {
  return (
    <section>
      <form
        action={async (formdata) => {
          var success = await login(formdata);
          if (success) {
            redirect('/home');
          } else {
            console.log('login failed');
          }
        }}>
        <input type='email' name='email' id='email' />
        <input type='password' name='password' id='password' />
        <input type='submit' name='submit' id='submit' />
      </form>

      <form
        action={async (formdata) => {
          await logout();
          redirect('/');
        }}>
        <button type='submit'>Logout</button>
      </form>
      <h1>Try this email: mandre361@west-mec.org password 1234</h1>
    </section>
  );
}
