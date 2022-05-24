import React from "react";
import SetoutItem from "./SetoutItem";

function SetoutsList(props) {
  const setouts = props.setouts;

  return (
    <section>
      {setouts.map((setout) =>
        <SetoutItem key={setout.id} {...setout} />
      )}
    </section>
  )
}

export default SetoutsList;