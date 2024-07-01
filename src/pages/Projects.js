import React from "react";
import ProjectMapDiv from "../components/ProjectMapDiv";
import data from "../data";
import { Box } from "@mui/material";
import Header from "../components/Header";

function Projects(){

    return(
        <div>
            <Header/>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center', textAlign:'center'}}>
            <Box>
                <h4 className="title">PROJECTS</h4>

                {
                data.Categories.map(cat=>(
                    <ProjectMapDiv heading={cat.name} category={cat.id}/>
                )) 
                }
            
            </Box>
            </div>
        </div>
    );
}

export default Projects;