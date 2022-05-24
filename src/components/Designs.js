import { getDesigns } from "../service/apiCalls"
import { useEffect, useState } from "react";
import DesignList from "./DesignList";
import React from "react";

function Designs() {
  const [designs, setDesigns] = useState([]);

  useEffect(()=>{
    getDesigns().then((data)=> setDesigns(data))
  }, [])

  return(
    <div>
      <DesignList designs={designs} />
    </div>
  )
}

export default Designs;