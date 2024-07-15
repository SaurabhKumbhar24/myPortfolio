import React from "react";
import Header from "../components/Header";
import { Box, Typography } from "@mui/material";
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import Footer from '../components/Footer';
import data from "../data";

function Contact(){

    return(
        <div>
            <Header/>
            <Box style={{display:'flex',flexDirection:'row',justifyContent:'center',textAlign:'center'}}>
                <div>
                <h4 className="title" style={{fontSize: '500%'}}>CONTACT</h4>
                <div style={{marginTop:-45}}>
                <Typography>
                    <div>
                    <a style={{textDecoration:'none',color:data.colors.primary,margin:5}} href={"mailto:"+data.Contact.mail}><Email/> <br/> {data.Contact.mail}</a><br/> 
                    </div>
                    <div style={{marginTop:10}}>
                    <a style={{textDecoration:'none',color:data.colors.primary,margin:5}} href={data.Contact.linkedin}><LinkedIn/> <br/> {data.Contact.linkedin}</a> <br/>
                    </div>
                    <div style={{marginTop:10}}>
                    <a style={{textDecoration:'none',color:data.colors.primary,margin:5}} href={data.Contact.github}><GitHub/> <br/> {data.Contact.github}</a>
                    </div>
                </Typography>
                </div>
                </div>
            </Box>
            <div style={{position:'absolute',bottom:0,width:'100%'}}>
            <Footer/>
            </div>
        </div>
    );
}

export default Contact;