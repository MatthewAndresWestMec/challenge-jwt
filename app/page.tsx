
import { redirect } from 'next/navigation';
import { login, logout } from './lib';

export default function SignIn() {
  return (
    <section>
      <form
        action={async (formdata) => {
          'use server' 
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
          'use server' 
          await logout();
          redirect('/');
        }}>
        <button type='submit'>Logout</button>
        <h1>mandre361@west-mec.org and 1234</h1>
      </form>
    </section>
  );
}
