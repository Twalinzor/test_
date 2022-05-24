import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <>
      <Link to="/designs">
        <button type="button">Designs</button>
      </Link>
      <Link to="/setouts">
        <button type="button">Setouts</button>
      </Link>
    </>
  );
}

export default Home;
