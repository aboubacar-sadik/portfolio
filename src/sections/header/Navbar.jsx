import { headerData } from './headerData';
import logo from '../../assets/svg/logo.svg';
import downloadIcon from '../../assets/svg/download-icon.svg';
import { nanoid } from 'nanoid';
import closeIcon from '../../assets/svg/close.svg';
import menuIcon from '../../assets/svg/menu.svg';
import { useRef } from 'react';

export default function Navbar() {
   const navRef = useRef();
   const resumeRef = useRef();
   const showNavbar = () => {
      navRef.current.classList.toggle('shown-nav');
      resumeRef.current.classList.toggle('responsive-resume');
   };

   const navLinks = headerData.nav_links.map((link) => {
      return (
         <li key={nanoid()}>
            <a href={link.link} className="link" onClick={showNavbar}>
               {link.name}
            </a>
         </li>
      );
   });

   return (
      <div className="navbar">
         <a href="/#" className="logo">
            <img src={logo} alt="" />
         </a>
         <nav ref={navRef} className="nav-links">
            <ul>{navLinks}</ul>
            <img className="close-icon" src={closeIcon} alt="" onClick={showNavbar} />
            <div ref={resumeRef} className="mobile-resume">
               <button className="btn">
                  CV <img src={downloadIcon} alt="" />
               </button>
            </div>
         </nav>
         <div className="resume">
            <button className="btn">
               CV <img src={downloadIcon} alt="" />
            </button>
         </div>
         <img className="menu-icon" src={menuIcon} alt="" onClick={showNavbar} />
      </div>
   );
}
