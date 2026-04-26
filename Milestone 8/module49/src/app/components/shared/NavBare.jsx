'use client'
import Link from 'next/link';
import user1 from '@/app/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const NavBare = () => {
  // get data from DB
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user

  // console.log(user)
  return (
    <div className='container mx-auto flex justify-between gap-4 mt-6'>
      <div></div>
      <ul className='flex justify-between items-center text-gray-700 gap-3'>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/about-us'}>About</NavLink></li>
        <li><NavLink href={'/career'}>Career</NavLink></li>
      </ul>
{ isPending ? (<span className="loading loading-infinity loading-xl"></span>) : user ? (
      <div className='flex items-center gap-2'>
        <h2 className='font-bold'>{user.name}</h2>
        <Image src={user.image || user1} alt='user_image' width={60} height={60}/>
        <button onClick={async() => await authClient.signOut()} className='btn btn-primary'>LogOut</button>
      </div>) : (<Link href={'/login'} className='btn btn-accent'>Login</Link>)
      }
    </div>
  );
};

export default NavBare;