import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <>
        <button id="nav-toggle" className="hover:cursor-pointer sm:hidden block text-brand-secondary text-2xl" aria-label="Toggle menu">
        <i className="fas fa-bars"></i>
        </button>

        <nav id="primary-menu" className="fixed top-0 left-0 w-full h-full bg-brand-secondary transform translate-x-full transition-transform duration-300 ease-in-out z-40 
        flex-col space-y-6 sm:translate-x-0 sm:relative sm:flex sm:flex-row sm:space-y-0 sm:space-x-6 sm:bg-transparent sm:h-auto sm:top-auto sm:left-auto sm:w-auto">
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    </>
  );
}