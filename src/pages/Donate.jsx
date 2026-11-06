import { donations, donationNote, site } from "../config/site.js";

export default function Donate() {
  return (
    <section className="section">
      <h1>Support our fundraising</h1>
      <p>
        Thank you to everyone who gives their time, attends our events and
        supports our fundraising. Your support helps us make a difference for
        the children at Woodstock CE Primary School.
      </p>
      <div className="card-grid">
        {donations.map((d) => (
          <article className="card" key={d.label}>
            <h3>{d.label}</h3>
            <p>{d.description}</p>
            {d.url ? (
              <a className="button" href={d.url} target="_blank" rel="noreferrer">
                Open
              </a>
            ) : (
              <p className="muted">Link to be added.</p>
            )}
          </article>
        ))}
      </div>
      <p className="muted">{donationNote}</p>
      <p>
        Questions about donations? Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </section>
  );
}
