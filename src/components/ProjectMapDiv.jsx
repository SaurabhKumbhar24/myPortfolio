import React from "react";
import data from "../data";
import CustomCard from "./CustomCard";
import { Box, Grid, Typography } from '@mui/material';

function ProjectMapDiv({heading,category}){

    return(
        <Box>
            <Typography style={{fontSize:'large',color:"white",marginTop:40,marginBottom:40}}>{heading}</Typography>
            
            <Grid container spacing={1} justifyContent="center" alignItems="center">
            {
                data.Projects.map((item,idx) => {
                if(item.category === category){
                    return (
                    <Grid item>
                        <CustomCard item={item} />
                    </Grid>
                    )
                }else{
                    return(<div></div>)
                }
                })
                
            }
            </Grid>
            <br/>
        </Box>
    );
}

export default ProjectMapDiv;