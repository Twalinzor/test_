import { getDesigns, getUsers } from "../service/apiCalls";
import { useEffect, useState } from "react";
import MainList from "./MainList";
import React from "react";

function Designs() {
  const [items, setItems] = useState([]);

  const headers = ["Name", "Courses", "Wales", "Last Updated", "By"];

  const designItems = items.map((design) => {
    const updateDate = new Date(design.updated);
    return {
      id: design.id,
      data: [
        design.name,
        design.courses,
        design.wales,
        updateDate.toLocaleString("es-ES", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
        design.user_id_last_update,
      ],
    };
  });

  useEffect(() => {
    Promise.all([getDesigns(), getUsers()]).then(([designs, users]) =>
      setItems(
        designs.map((design) => {
          const user = users.find(
            (user) => user.id === design.user_id_last_update
          );

          return {
            ...design,
            user_id_last_update: user.name,
          };
        })
      )
    );
  }, []);

  return (
    <div>
      <MainList items={designItems} headers={headers} />
    </div>
  );
}

export default Designs;
