import { site, getInvolved } from "../config/site.js";

export default function Contact() {
  return (
    <section className="section">
      <h1>Contact us</h1>
      <p>
        If you would like to get involved, have an idea to share or would like
        to support an event, please email:
      </p>
      <p>
        <a className="button" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
      <h2>{getInvolved.heading}</h2>
      {getInvolved.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <p>
        You can also find us via the{" "}
        <a href={site.schoolPageUrl} target="_blank" rel="noreferrer">
          school website
        </a>
        .
      </p>
    </section>
  );
}
