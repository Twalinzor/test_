import React from "react";
import dayjs from "dayjs";

function SetoutItem(setout) {
  return (
    <>
      <h1>Setout Name: {setout.name}</h1>
      <h2>Machine Name: {setout.machine_name}</h2>
      <h2>Machine Width: {setout.machine_width}</h2>
      <h2>Courses: {setout.courses}</h2>
      <h2>Last updated: {dayjs(setout.updated).locale("en").format("D MMMM, YYYY")}</h2>
    </>
  );
}

export default SetoutItem;
