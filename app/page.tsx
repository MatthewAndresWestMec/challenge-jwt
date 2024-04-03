import { redirect } from 'next/navigation';
import { getSession, login, logout } from './lib';

export default async function Login() {
  const session = await getSession();
  return (
    <section>
      <form
        action={async (formdata) => {
          'use server';
          await login(formdata);
          redirect('/home');
        }}>
        <input type='email' name='email' id='email' placeholder='Email' />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
        />
        <input type='submit' name='submit' id='submit' />
      </form>

      <form
        action={async (formdata) => {
          'use server';
          await logout();
          redirect('/');
        }}>
        <button type='submit'>Logout</button>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </form>
    </section>
  );
}
