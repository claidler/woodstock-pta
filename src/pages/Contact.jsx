import { site, getInvolved } from "../config/site.js";

export default function Contact() {
  return (
    <>
    <section className="band">
      <h1>Contact us</h1>
      <p>
        If you would like to get involved, have an idea to share or would like
        to support an event, drop us an email and we will get back to you.
      </p>
      <p>
        <a className="button" href={`mailto:${site.email}`}>
          Email us
        </a>
      </p>
    </section>
    <section className="section">
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
    </>
  );
}
