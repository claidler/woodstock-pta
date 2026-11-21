export default function CommitteeCard({ member }) {
  return (
    <article className="card committee-card">
      <h3>{member.name}</h3>
      <p className="muted">{member.role}</p>
    </article>
  );
}
