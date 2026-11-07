import { NavLink, Outlet, Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { site } from "../config/site.js";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/events", label: "Events" },
  { to: "/committee", label: "Committee" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  return (
    <div className="site">
      <header className="site-header">
        <Link to="/" className="site-title">
          <Logo className="site-logo" />
          <span>{site.shortName}</span>
        </Link>
        <nav className="site-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <img className="footer-logo" src={site.logo} alt={site.shortName} />
        <nav className="footer-links" aria-label="Footer">
          <a className="footer-link" href={`mailto:${site.email}`}>
            <svg
              className="footer-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            <span>Email</span>
          </a>
          <a
            className="footer-link"
            href={site.schoolUrl}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="footer-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 21h18" />
              <path d="M5 21V10l7-5 7 5v11" />
              <path d="M9 21v-6h6v6" />
            </svg>
            <span>School</span>
          </a>
        </nav>
      </footer>
    </div>
  );
}
