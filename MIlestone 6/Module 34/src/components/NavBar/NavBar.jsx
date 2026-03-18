import React, { useState } from 'react';
import Links from './Links';
import { Menu , X} from 'lucide-react';
const navLinks = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Services",
    path: "/services"
  },
  {
    name: "Blog",
    path: "/blog"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];
const NavBar = () => {
  const [open, setOpen] = useState(false)

  const links = navLinks.map(elem => <Links key={elem.id} props={elem}></Links>)
  return (
    
    <nav className='flex mx-2.5 justify-between'>
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? <Menu className='md:hidden'></Menu> : <X className='md:hidden'></X>}
        <h3 className='ml-4'>My Navbar</h3>
      </span>
      <ul className='md:flex hidden md:block'>
          {links}
        </ul>
      <ul className={`md:flex md:space-x-2.5 md:space-y-0 space-y-1.5 absolute ${open ? 'top-8' : '-top-40'} duration-1000`}>
        {
            links
        }
      </ul>
      {/* <ul className="flex space-x-2.5">
        {
          navLinks.map(elem => <li><a href={elem.path}>{elem.name}</a></li>)
        }
      </ul> */}
      {/* <ul className="flex space-x-2.5">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul> */}
      <button>Sign in</button>
    </nav>
  );
};

export default NavBar;