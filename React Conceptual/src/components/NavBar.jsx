import { useState } from "react";
import Links from "./Links";

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
  return (
    <nav>
      {/* Method 1 */}
      {/* <ul className="flex gap-2.5">
        <li><a href='/'>Home</a></li>
        <li><a href='/about'>About</a></li>
        <li><a href='/blog'>Blog</a></li>
      </ul> */}
      
      {/* Method 2 */}
      {/* <ul className="flex gap-2.5">
        {
        navLinks.map(elem => <li><a href={`/${elem.path}`}>{elem.name}</a></li>)
        }
      </ul> */}
      {/* Method 3 */}
      <ul className="flex gap-2.5">
        {navLinks.map((elem, index) => <Links key={index} props={elem}/>)}
      </ul>
    </nav>
  );
};

export default NavBar;