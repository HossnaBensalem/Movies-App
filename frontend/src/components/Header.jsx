import React from 'react';
import "./Header.css";
import { Link, NavLink } from 'react-router-dom';
import { useMovieContext } from './context/GlobalContext';

function Header() {
  const { darkMode, toggleDarkMode } = useMovieContext();
  
  return (
    <div className='header'>
      <div className='container'>
        <div className='logo'>
          <Link to="/">Movies</Link>
        </div>
        <ul className='nav-links'>
          <li>
            <NavLink to="/">Watch List</NavLink>
          </li>
          <li>
            <NavLink to="/watched">Watched</NavLink>
          </li>
          <li>
            <NavLink to="/add" className='btn'>Add</NavLink>
          </li>
          <li>
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Light
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  Dark
                </>
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;