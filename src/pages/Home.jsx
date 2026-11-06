import { Link } from "react-router-dom";
import EventCard from "../components/EventCard.jsx";
import Logo from "../components/Logo.jsx";
import { site, intro, getInvolved, events } from "../config/site.js";

export default function Home() {
  const nextEvent = events[0];

  return (
    <>
      <section className="hero">
        <Logo className="hero-logo" />
        <h1>{intro.heading}</h1>
        <p className="tagline">{site.tagline}</p>
        <div className="hero-actions">
          <Link className="button" to="/events">
            See our events
          </Link>
          <Link className="button button-secondary" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>

      <section className="section">
        {intro.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>

      {nextEvent && (
        <section className="section">
          <h2>Our next event</h2>
          <EventCard event={nextEvent} />
        </section>
      )}

      <section className="band">
        <h2>{getInvolved.heading}</h2>
        {getInvolved.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <p>
          <Link className="button button-secondary" to="/contact">
            Get in touch
          </Link>
        </p>
      </section>
    </>
  );
}
