import React from "react";
import ProjectMapDiv from "../components/ProjectMapDiv";
import data from "../data";
import { Box } from "@mui/material";
import Header from "../components/Header";
import Footer from '../components/Footer';

function Projects(){

    return(
        <div>
            <Header/>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center', textAlign:'center'}}>
            <Box>
                <h4 className="title" style={{fontSize: '500%'}}>PROJECTS</h4>
                <div style={{marginTop:-40}}>
                {
                data.Categories.map(cat=>(
                    <ProjectMapDiv heading={cat.name} category={cat.id}/>
                )) 
                }
                </div>
            </Box>
            </div>
            <Footer/>
        </div>
    );
}

export default Projects;