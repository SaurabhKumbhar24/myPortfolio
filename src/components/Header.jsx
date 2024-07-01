import React from "react";
import { AppBar, Toolbar, Box, Grid, Button, Avatar } from '@mui/material';
import data from "../data";


function Header(){
    return(
        <AppBar elevation={0} position="static" style={{background:'transparent',padding:5}}>
            <Toolbar variant="dense" style={{display:'flex',justifyContent:'space-between'}}>
                <Box style={{display:'flex'}}>                
                    <a style={{textDecoration:'none',textTransform:'none'}} href="/"><Avatar variant="rounded" style={{color:'white',background:data.colors.primary}}>SK</Avatar></a>
                </Box>
                <Box>
                    <Grid container>
                        <Grid item> <Button href="/" style={{color:data.colors.primary}}>HOME</Button> </Grid>
                        <Grid item> <Button href="/projects" style={{color:data.colors.primary}}>PROJECTS</Button> </Grid>
                        <Grid item> <Button href="/contact" style={{color:data.colors.primary}}>CONTACT</Button> </Grid>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;