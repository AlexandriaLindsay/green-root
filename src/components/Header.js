// import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { Nav } from './Nav.js';
import Logo from '../assets/img/logo.svg';
// import { gsap } from 'gsap';

export function Header() {


  return (

    <header className='max-w-[100rem] mx-auto'>
        <div className="flex justify-between items-center py-4 px-[4rem]">
            <Link to="/">
                <img className="w-56 h-auto" src={Logo} alt="Green Root Logo" />
            </Link>
            <Nav></Nav>
        </div>
    </header>
  );
}
