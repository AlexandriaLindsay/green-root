import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <>
        <button id="nav-toggle" className="hover:cursor-pointer sm:hidden block text-brand-secondary text-2xl" aria-label="Toggle menu">
        <i className="fas fa-bars"></i>
        </button>

        <nav id="primary-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav>
    </>
  );
}