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
      <div className="event-card-body">
        <h3>{event.title}</h3>
        <p className="event-meta">
          {[event.date, event.time, event.location].filter(Boolean).join(" · ")}
        </p>
        {event.price && <p className="event-price">{event.price}</p>}
        <p>{event.description}</p>
        {event.sessions && (
          <div className="event-sessions">
            {event.sessions.map((s) => (
              <div className="event-session" key={s.day}>
                <p className="event-session-day">{s.day}</p>
                {s.slots.map((slot) => (
                  <div
                    className="event-slot"
                    key={slot.group + slot.time}
                  >
                    <span className="event-slot-group">{slot.group}</span>
                    <span className="event-slot-time">{slot.time}</span>
                    {slot.note && (
                      <span className="event-slot-note">{slot.note}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
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
      </div>
    </article>
  );
}
