import EventCard from "../components/EventCard.jsx";
import { upcomingEvents, pastEvents } from "../config/site.js";

export default function Events() {
  return (
    <section className="section">
      <h1>Events &amp; ticketing</h1>
      <p>
        Tickets for our events are sold through trusted ticketing platforms.
        Use the booking button on each event.
      </p>

      <h2>Upcoming</h2>
      {upcomingEvents.length === 0 ? (
        <p className="muted">No upcoming events right now. Check back soon!</p>
      ) : (
        <div className="card-grid events-grid">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}

      {pastEvents.length > 0 && (
        <>
          <h2>Past events</h2>
          <div className="card-grid events-grid">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} past />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
