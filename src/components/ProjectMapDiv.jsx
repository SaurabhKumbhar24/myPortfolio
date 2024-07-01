import React from "react";
import data from "../data";
import CustomCard from "./CustomCard";
import { Box, Chip, Grid, Typography } from '@mui/material';

function ProjectMapDiv({heading,category}){

    return(
        <Box>
            <Typography style={{fontSize:'large',color:data.colors.nameColor,marginTop:40,marginBottom:40}}>{heading}</Typography>
            <div style={{marginBottom:20}}>
            {
                data.catSkills.map((item)=>{
                    if(item.cat === category){
                        return(
                            item.skills.map((skill,indx) => (<Chip color='success' variant="outlined" style={indx !== 0 ? {marginLeft:10}:{marginLeft:0}} label={skill}/>))
                        );
                    }
                })
            }
            </div>
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