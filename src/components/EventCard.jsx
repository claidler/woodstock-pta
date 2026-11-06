export default function EventCard({ event }) {
  return (
    <article className="card event-card">
      {event.image && (
        <img
          className="event-image"
          src={event.image}
          alt={event.title}
          loading="lazy"
        />
      )}
      <h3>{event.title}</h3>
      <p className="event-meta">
        {[event.date, event.time, event.location].filter(Boolean).join(" · ")}
      </p>
      {event.price && <p className="event-price">{event.price}</p>}
      <p>{event.description}</p>
      {event.sessions && (
        <ul className="event-sessions">
          {event.sessions.map((s) => (
            <li key={s.day}>
              <strong>{s.day}</strong> — {s.details}
            </li>
          ))}
        </ul>
      )}
      {event.ticketUrl ? (
        <a
          className="button"
          href={event.ticketUrl}
          target="_blank"
          rel="noreferrer"
        >
          {event.ticketLabel || "Book tickets"}
        </a>
      ) : (
        <p className="muted">Booking details coming soon.</p>
      )}
    </article>
  );
}
