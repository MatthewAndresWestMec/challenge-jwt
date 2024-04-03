import Link from 'next/link';
import { getSession, logout } from '../lib';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getSession();
  console.log(session);
  return (
    <nav>
      <ul>
        <li>
          <Link href='/home'>
            <h1>Home</h1>
          </Link>
        </li>
        <>
          <li>
            <Link href='/profile'>
              <h1>Profile</h1>
            </Link>
          </li>
          <li>
            <form
              action={async (formdata) => {
                'use server';
                await logout();
                redirect('/login');
              }}>
              <button type='submit'>Logout</button>
              <pre>{JSON.stringify(session, null, 2)}</pre>
              <pre></pre>
            </form>
          </li>
        </>
      </ul>
    </nav>
  );
}
