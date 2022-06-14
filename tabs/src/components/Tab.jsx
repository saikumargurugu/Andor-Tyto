import React, { useEffect, useState } from "react";
// import { Welcome } from "./sample/Welcome";
import * as microsoftTeams from "@microsoft/teams-js";
import OutlinedCard from "./modules/sidePan";

export default function Tab() {
  const [meet, setMeet]= useState("-----")
  // eslint-disable-next-line react-hooks/exhaustive-deps


//   const performInit= async ()=>{
//   await microsoftTeams.initialize();
//   const Callback = function (context) {

//     console.log("++++",context);
//     setMeet(JSON.stringify(context))
//   };
//   await microsoftTeams.getContext(Callback)
// }
// performInit();
  // const context = microsoftTeams.getContext()
  // console.log("==============",context,JSON.stringify(context));
  return (
    <div >
      <OutlinedCard/>
    </div>
  );
}