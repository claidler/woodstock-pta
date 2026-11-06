import EventCard from "../components/EventCard.jsx";
import { events } from "../config/site.js";

export default function Events() {
  return (
    <section className="section">
      <h1>Events &amp; ticketing</h1>
      <p>
        Tickets for our events are sold through trusted ticketing platforms.
        Use the booking button on each event. Upcoming events are listed below.
      </p>
      {events.length === 0 ? (
        <p className="muted">No upcoming events right now. Check back soon!</p>
      ) : (
        <div className="card-grid">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}
