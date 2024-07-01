import React, { Fragment } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import data from "../data";
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import Header from '../components/Header';
import Dl from '../assets/deep-learning.jpeg';

function App() {
  return (
    <Fragment>
      <Header/>
      <div className="noMob">
        <Avatar src={Dl} style={{position:'fixed',right:'10%',top:'25%'}} sx={{ width: 350, height: 350 }} variant='rounded'/>
      </div>
      <Box style={{padding:40,marginTop:50}}>
        <Typography style={{fontWeight:900,fontSize:'500%',color:data.colors.primary,lineHeight:0.8}}>Hello I'm</Typography>
        <Typography style={{fontWeight:900,fontSize:'500%',color:data.colors.nameColor,lineHeight:0.8}}>Saurabh Kumbhar</Typography>
        
        <div style={{marginTop:50}}>
          <div>
          <Typography className="BasicInfo">
            {data.BasicInfo}
          </Typography>
          </div>
        </div>
      </Box>
      <div style={{marginLeft:40}}>
        <a href="/projects" className='projectsBtn'>PROJECTS</a>
      </div>
      <Box style={{margin:40,marginTop:60}}>
        <Box>
          <Typography>
            <a style={{textDecoration:'none',color:data.colors.primary,margin:5}} href={"mailto:"+data.Contact.mail}><Email/></a> 
            <a style={{textDecoration:'none',color:data.colors.primary,margin:5}} href={data.Contact.linkedin}><LinkedIn/></a> 
            <a style={{textDecoration:'none',color:data.colors.primary,margin:5}} href={data.Contact.github}><GitHub/></a>
          </Typography>
        </Box>
      </Box>
    </Fragment>
  );
}

export default App;
