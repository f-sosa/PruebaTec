"use client";

import styles from './Header.css';

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <input type="checkbox" id="toggle" />
      <nav>
        <a className="navbar-brand">Franco Sosa</a>
        <label className="navbar-toggler" htmlFor="toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/" passHref>
              <h1 className="nav-link">Home</h1>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" passHref>
              <h1 className="nav-link">About</h1>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/interest" passHref>
              <h1 className="nav-link">Interest</h1>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" passHref>
              <h1 className="nav-link">Contact</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;