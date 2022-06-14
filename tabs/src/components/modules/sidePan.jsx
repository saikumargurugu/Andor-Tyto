import './sidePan.css';

import * as microsoftTeams from "@microsoft/teams-js";

import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import Typography from '@mui/material/Typography';
import logo from '../../assets/logoBig.png';
import upArrow from '../../assets/arrowup.png';

export default function OutlinedCard() {
  const [msg, setMsg] = useState("")
  const [element, setElement] = useState("")
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  // const getvalidation = function (err, result) {
  //   console.log(result.isAppSharing, "sdgdfhdfhdfhdf");
  //   setMsg(result.isAppSharing)
  //   if (result.isAppSharing) {
  //     console.log("innnnnnnnnnnnnnn");
  //     // Indicates app has permission to share contents to meeting stage.
  //   }
  // }
  // const showStageContent = async () => {
  //   console.log("lnnnnnnnnn");
  //   const appContentUrl = "https://dev.andornow.com/tgh/techcheck/validatedevice";
  //   // got this from https://docs.microsoft.com/en-us/microsoftteams/platform/apps-in-teams-meetings/api-references?tabs=dotnet#share-app-content-to-stage-api
  //   await microsoftTeams.initialize()
  //   console.log(microsoftTeams.meeting);
  //   await microsoftTeams.meeting.getAppContentStageSharingState(getvalidation)
  //   await microsoftTeams.meeting.shareAppContentToStage((err, result) => {
  //     if (result) {
  //       // handle success
  //     }
  //     if (err) {
  //       // handle error
  //     }
  //   }, appContentUrl);

  // }

  useEffect(() => {
    const element = document.getElementById("start")
    setElement(element)

  }, [])


  const card = (
    <div className='sidePanContent' >
      <div className='logoText' >
        <img className='logo' src={logo} alt="andorhealth" width="90" height="20" />
        <CardContent>
          <Typography sx={{
            justifyContent: "center",
            alignContent:"center",
            textAlign:'center'
          }} >
            Click on share icon <PresentToAllIcon /> above to initiate Tyto care Video feed.
          </Typography>
        </CardContent>
      </div>

      {/* <CardActions> */}
      {/* <Button size="small" onClick={()=>showStageContent()}>Present on Stage</Button> */}
      {/* </CardActions> */}
      <img src={upArrow} alt="up arrow" height="150" width="40" className='arrow' />
    </div>
  )
  return (
    <div id="start">
      <Box sx={{ minWidth: 275 }} >
        {
          element && element?.offsetWidth && element?.offsetWidth < 300 ?
            <div className='card' ><Card>{card}</Card></div>
            :
            // <iframe title="techCheck"
            //   height="100%"
            //   width="100%"
            //   src="https://www.youtube.com/embed/0_KHaw_pf6E" frameborder="0" allowfullscreen

            // />
            <iframe style={{height:"600px", width:"600px"}} src="https://stage1.tytocare.com/index.htm#/startOnlineVisit/2mZ47a56/OeUTCvnPVhNJ7lQQmFTLwmIMW0YiwhTEfFcGCqlyPV4*/true" sandbox="allow-same-origin allow-popups allow-forms allow-scripts allow-top-navigation" allow="autoplay; fullscreen; animations" frameBorder="0" title="Tytocare"/>
        }

      </Box>
    </div>
  );
}
