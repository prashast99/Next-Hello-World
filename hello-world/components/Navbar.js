import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";
import styles from '@/styles/Home.module.css'


export default function Navbar() {
    const { data: session } = useSession();

  console.log('session => ', session);
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="/">NeXT APP</a>
      </h1>
      <ul
        className={`main-nav ${
          !session === 'loading' ? 'loading' : 'loaded'
        }`}
      >
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        {!session !== 'authenticated' && (
          <li>
            <Link href="/api/auth/signin">
              
            <button className="" onClick={() => signIn('Github')}>
         <span className="auto-signup__label">Log In</span>
         </button>
            </Link>
          </li>
        )}
        {session && status !== 'unauthenticated' && (
          <li>
            <Link href="/api/auth/signout">
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                Sign Out
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}