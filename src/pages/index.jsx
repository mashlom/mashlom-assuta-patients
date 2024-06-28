import * as React from 'react';
import { Link } from 'gatsby';

export default function IndexPage() {
  return (
    <div
      style={{
        margin: '12px',
        direction: 'ltr',
        textDecoration: 'underline',
        color: 'blue',
      }}
    >
      <h1>
        <Link to="/prematurity">mashlom-assuta-patients</Link>
      </h1>
      <h1 id="assuta-patients">
        <Link to="/surgeries/preparation">assuta-patients</Link>
      </h1>
    </div>
  );
};

export const Head = () => <title>Home Page</title>;
