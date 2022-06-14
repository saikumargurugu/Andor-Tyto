import "./App.css";
import '../components/modules/sidePan.css';

import * as microsoftTeams from "@microsoft/teams-js";

import CardContent from '@mui/material/CardContent';
import React from "react";
import Typography from '@mui/material/Typography';
import logo from '../assets/logoBig.png';

/**
 * The 'Config' component is used to display your group tabs
 * user configuration options.  Here you will allow the user to
 * make their choices and once they are done you will need to validate
 * their choices and communicate that to Teams to enable the save button.
 */
class Overview extends React.Component {
  render() {
    // Initialize the Microsoft Teams SDK
    microsoftTeams.initialize();

    /**
     * When the user clicks "Save", save the url for your configured tab.
     * This allows for the addition of query string parameters based on
     * the settings selected by the user.
     */
    microsoftTeams.settings.registerOnSaveHandler((saveEvent) => {
      const baseUrl = `https://${window.location.hostname}:${window.location.port}`;
      microsoftTeams.settings.setSettings({
        suggestedDisplayName: "Andor Tyto",
        entityId: "Test",
        contentUrl: baseUrl + "/index.html#/tab",
        websiteUrl: baseUrl + "/index.html#/tab",
      });
      saveEvent.notifySuccess();
    });

    /**
     * After verifying that the settings for your tab are correctly
     * filled in by the user you need to set the state of the dialog
     * to be valid.  This will enable the save button in the configuration
     * dialog.
     */
    microsoftTeams.settings.setValidityState(true);

    return (
      <div className='sidePanContent' style={{marginTop:"10px"}} >
      <div className='logoText' >
        <CardContent>
        <img className='logo' src={logo} alt="andorhealth" width="90" height="20" />
          <Typography sx={{
            paddingTop:'10px',
            justifyContent: "center",
            alignContent:"center",
            textAlign:'center'
          }} >
            AndorTyto app to pull tyto care video feeds into the session.
          </Typography>
        </CardContent>
      </div>
    </div>
    );
  }
}

export default Overview;
