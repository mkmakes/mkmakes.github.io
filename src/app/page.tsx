import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <header>
        <h1>
          <em>mk</em>.codes here
        </h1>
        <p>
          <strong>
            <em>mk</em>
          </strong>{" "}
          codes neat things with Typescript, Node, React, and Native too! From
          frontend architecture, to backend development, everything is 👌.
        </p>
      </header>
      <h2>He&rsquo;s been building cool things for a while</h2>
      <p>
        <strong>
          <em>A decade of experience and counting, actually.</em>
        </strong>
      </p>
      <p>Here&rsquo;s some of the tech he&rsquo;s picked up along the way:</p>
      <ul>
        <li>
          <strong>Languages:</strong> Typescript, Javascript, Node, and the
          occasional Python and Ruby
        </li>
        <li>
          <strong>Frontend:</strong> React, React Native, Vue,
          Styled-Components, React Testing Library
        </li>
        <li>
          <strong>Backend:</strong> Node, Express, NextJS, Apollo GraphQL, Knex,
          Drizzle
        </li>
      </ul>
      <h3>And of course, the learning never stops</h3>
      <p>Not to mention, there&rsquo;s more stuff he simply forgot to list!</p>
      <hr />
      <h2>Firespring, Creative Department</h2>
      <p>Full Stack Software Engineer</p>
      <h2>LI-COR, Engineering</h2>
      <p>Web Software Developer</p>
      <h2>Traction Tools, Frontend Engineering</h2>
      <p>Senior Frontend Engineer</p>
      <h2>Exodus, Application Engineering</h2>
      <p>Frontend Application Engineer</p>
      <h2>Freelance, Project engineering</h2>
      <p>Full Stack Project Engineer</p>
      <h3>Now, he&rsquo;s back in New Zealand</h3>
      <p>Where will he end up in Kiwiland?</p>
      <hr />
      <h2>
        Contact <em>mk</em>.codes
      </h2>
      <p>Here are some of the ways you can reach him.</p>
      <Button>Email</Button>
    </>
  );
};

export default Home;
