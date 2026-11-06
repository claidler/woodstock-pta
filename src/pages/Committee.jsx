import CommitteeCard from "../components/CommitteeCard.jsx";
import { committee } from "../config/site.js";

export default function Committee() {
  return (
    <section className="section">
      <h1>Meet the committee</h1>
      <p>
        The Friends of Woodstock is run by a volunteer committee of parents,
        carers and staff.
      </p>
      <div className="card-grid committee-grid">
        {committee.map((member) => (
          <CommitteeCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
