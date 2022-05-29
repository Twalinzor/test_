import { getSetouts } from "../service/apiCalls";
import { useEffect, useState } from "react";
import MainList from "./MainList";
import React from "react";

function Setouts() {
  const [items, setItems] = useState([]);

  const headers = [
    "Name",
    "Machine Name",
    "Machine Width",
    "Courses",
    "Last Updated",
  ];

  const setoutItems = items.map((setout) => {
    const updateDate = new Date(setout.updated);
    return {
      id: setout.id,
      data: [
        setout.name,
        setout.machine_name,
        setout.machine_width,
        setout.courses,
        updateDate.toLocaleString("es-ES", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
      ],
    };
  });

  useEffect(() => {
    getSetouts().then((data) => setItems(data));
  }, []);

  return (
    <div>
      <MainList items={setoutItems} headers={headers} />
    </div>
  );
}

export default Setouts;
