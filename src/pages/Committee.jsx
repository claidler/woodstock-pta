import { Link } from "react-router-dom";
import CommitteeCard from "../components/CommitteeCard.jsx";
import { committee } from "../config/site.js";

export default function Committee() {
  return (
    <section className="section">
      <h1>Meet the committee</h1>
      <p>
        The Friends of Woodstock is run by a volunteer committee of parents,
        carers and staff. <Link to="/governance">About our governance &rarr;</Link>
      </p>
      <figure className="committee-photo">
        <img
          src="/img/committee-group.jpg"
          alt="The Friends of Woodstock committee, group photo"
          loading="lazy"
        />
        <figcaption>The Friends of Woodstock committee.</figcaption>
      </figure>
      <div className="card-grid committee-grid">
        {committee.map((member) => (
          <CommitteeCard key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
}
