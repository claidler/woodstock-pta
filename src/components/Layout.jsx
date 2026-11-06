import { NavLink, Outlet, Link } from "react-router-dom";
import { site } from "../config/site.js";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/events", label: "Events" },
  { to: "/committee", label: "Committee" },
  { to: "/donate", label: "Donate" },
  { to: "/contact", label: "Contact" },
];

export default function Layout() {
  return (
    <div className="site">
      <header className="site-header">
        <Link to="/" className="site-title">
          {site.shortName}
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
        <p className="footer-motto">{site.motto}</p>
        <p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p>
          <a href={site.schoolUrl} target="_blank" rel="noreferrer">
            Woodstock CE Primary School
          </a>
        </p>
      </footer>
    </div>
  );
}
