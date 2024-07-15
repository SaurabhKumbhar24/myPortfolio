import React from "react";
import { Box, Typography, Avatar } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import data from "../data";

function Footer(){
    return(
        <footer>
            <div style={{
                marginTop:10,
                padding:10,
                paddingTop:20,
                marginBottom:0,
                background:'whitesmoke'
                }}>
            <Box style={{display:'flex',justifyContent:'center'}}>
                <div>
                <Box style={{display:'flex',justifyContent:'center'}}>                
                    <a style={{textDecoration:'none',textTransform:'none'}} href="/"><Avatar variant="rounded" style={{color:'white',background:data.colors.primary}}>SK</Avatar></a>
                </Box>
                <Box>
                    <br/>
                    <Typography style={{textAlign:'center'}}>Saurabh Kumbhar</Typography>
                    <Typography style={{textAlign:'center',marginTop:10}}>
                        <a style={{textDecoration:'none',color:data.colors.primary,margin:5}} href={"mailto:"+data.Contact.mail}><Email/></a> 
                        <a style={{textDecoration:'none',color:data.colors.primary,margin:5}} href={data.Contact.linkedin}><LinkedIn/></a> 
                        <a style={{textDecoration:'none',color:data.colors.primary,margin:5}} href={data.Contact.github}><GitHub/></a>
                    </Typography>
                    <Typography style={{textAlign:'center',marginTop:10}}>
                        <a style={{textDecoration:'none',color:'black',fontSize:'small'}} href="/">HOME</a><a style={{textDecoration:'none',marginLeft:10,color:'black',fontSize:'small'}} href="/projects">PROJECTS</a><a style={{textDecoration:'none',marginLeft:10,color:'black',fontSize:'small'}} href="/contact">CONTACT</a>
                    </Typography>
                </Box>
                </div>
            </Box>
            </div>
        </footer>
    );
}

export default Footer;