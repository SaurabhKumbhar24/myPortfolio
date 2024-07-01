import React from "react";
import { AppBar, Toolbar, Box, Grid, Button, Avatar } from '@mui/material';
import Logo from '../assets/logo.png';


function Header(){
    return(
        <AppBar elevation={0} position="static" style={{background:'transparent',padding:5}}>
            <Toolbar variant="dense" style={{display:'flex',justifyContent:'space-between'}}>
                <Box style={{display:'flex'}}>                
                    <Box style={{display:'flex'}}>
                        <Avatar src={Logo}/> 
                    </Box>
                </Box>
                <Box>
                    <Grid container>
                        <Grid item> <Button href="/" style={{color:'#7FD858'}}>HOME</Button> </Grid>
                        <Grid item> <Button href="/projects" style={{color:'#7FD858'}}>PROJECTS</Button> </Grid>
                        <Grid item> <Button href="/contact" style={{color:'#7FD858'}}>CONTACT</Button> </Grid>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;