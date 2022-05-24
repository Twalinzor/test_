import { getSetouts } from "../service/apiCalls";
import { useEffect, useState } from "react";
import SetoutsList from "./SetoutsList";
import React from "react";

function Setouts() {
  const [setouts, setSetouts] = useState([]);

  useEffect(() => {
    getSetouts().then((data) => setSetouts(data));
  }, []);

  return (
    <div>
      <SetoutsList setouts={setouts} />
    </div>
  );
}

export default Setouts;
