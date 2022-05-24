import React from "react";
import dayjs from "dayjs";

function DesignItem(design) { 
  return (
    <>
      <h1>Design Name: {design.name}</h1>
      <h2>Courses: {design.courses}</h2>
      <h2>Status: {design.status}</h2>
      <h2>Wales: {design.wales}</h2>
      <h2>Last update: {dayjs(design.updated).locale("en").format("D MMMM, YYYY")}</h2>
    </>
  )
}

export default DesignItem