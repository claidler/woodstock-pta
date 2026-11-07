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
        <img className="footer-logo" src={site.schoolLogo} alt="Woodstock CE Primary School logo" />
        <nav className="footer-links">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.schoolUrl} target="_blank" rel="noreferrer">
            School
          </a>
        </nav>
      </footer>
    </div>
  );
}
