import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './Nav.js';

export function Header() {
  return (

    <header>
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
            <Link to="/">
                {/* <img className="w-56 h-auto" src="<?php echo (is_page('home')) ? get_stylesheet_directory_uri() . '/img/blue-collar-fire-logo-reverse-web.png' : get_stylesheet_directory_uri() . '/img/blue-collar-fire-logo-web.png'; ?>" alt="Blue Collar Fire Logo" /> */}
            </Link>
        </div>

        <Nav></Nav>
    </header>
  );
}
