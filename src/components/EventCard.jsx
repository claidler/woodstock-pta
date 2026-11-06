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
      <p>{event.description}</p>
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
