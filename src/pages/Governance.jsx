import { Link } from "react-router-dom";

export default function Governance() {
  return (
    <section className="section governance">
      <h1>Governance</h1>
      <p>
        Friends of Woodstock CE Primary School is a charitable
        unincorporated association — separate to the School — with the object
        to advance the education of pupils in the school in particular by:
      </p>
      <ul>
        <li>
          Developing effective relationships between the staff, parents and
          others associated with the school
        </li>
        <li>
          Engaging in activities or providing facilities or equipment which
          support the school and advance the education of the pupils
        </li>
      </ul>
      <p>
        Because it is a separate organisation, the association is its own
        legal entity: the School is not responsible for its debts or
        obligations, and the association is not responsible for the School’s.
      </p>
      <p>
        The association is run by a committee (who are also the charity
        trustees) which is currently comprised of parents, carers and staff.
      </p>
      <p>
        <Link to="/committee">Meet the committee &rarr;</Link>
      </p>
    </section>
  );
}
