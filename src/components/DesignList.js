import DesignItem from "./DesignItem";
import React from "react";

function DesignList(props) {
  const designs = props.designs;
  
  return (
    <section>
      {designs.map((design) =>
        <DesignItem key={design.id} {...design} />
      )}
    </section>
  )
}

export default DesignList;