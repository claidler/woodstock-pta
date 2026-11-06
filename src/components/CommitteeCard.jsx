export default function CommitteeCard({ member }) {
  return (
    <article className="card committee-card">
      <img
        className="committee-photo"
        src={member.photo}
        alt={`Photo of ${member.name}`}
        loading="lazy"
      />
      <h3>{member.name}</h3>
      <p className="muted">{member.role}</p>
    </article>
  );
}
