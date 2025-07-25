import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './Nav.js';
import Logo from '../assets/img/logo.svg';

export function Header() {
  return (

    <header>
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
            <Link to="/">
                <img className="w-56 h-auto" src={Logo} alt="Green Root Logo" />
            </Link>
            <Nav></Nav>
        </div>
    </header>
  );
}
