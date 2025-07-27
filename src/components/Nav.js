import React from 'react';
// import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <>
        <button id="nav-toggle" className="hover:cursor-pointer block text-brand-primary text-4xl" aria-label="Toggle menu">
          <i className="fas fa-bars"></i>
        </button>

        {/* <nav id="primary-menu">
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
        </nav> */}
    </>
  );
}