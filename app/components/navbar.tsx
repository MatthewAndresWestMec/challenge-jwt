import Link from 'next/link';
import { getSession, logout } from '../lib';
import { redirect } from 'next/navigation';

export default async function Navbar() {
  const session = await getSession();

  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <>
          <li>
            <Link href='/profile'>
              <a>Profile</a>
            </Link>
          </li>
          <li>
            <form
              action={async (formdata) => {
                'use server';
                await logout();
                redirect('/');
              }}>
              <button type='submit'>Logout</button>
              <pre>{JSON.stringify(session, null, 2)}</pre>
            </form>
          </li>
        </>
      </ul>
    </nav>
  );
}
