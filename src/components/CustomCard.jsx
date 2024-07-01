import React from "react";

import { 
    Card, CardContent, CardActions, Button,
} from '@mui/material';

function CustomCard({item}){

    return(
        <Card sx={item.category !== 'Pub' ? { maxWidth: 300, maxHeight:300 } : {maxHeight:300}} variant="outlined" 
        style={item.category !== 'Pub' ? {
            
            color:'white', background:'transparent',borderWidth:1,
            borderColor:'white'
        }:
        {
            color:'white', background:'transparent', borderColor:'transparent'   
        }
        }>
            <CardContent>
                <h6 style={{fontSize:'medium',margin:0}}>{item.title}</h6>
                <p>{item.shortDescription}</p>
            </CardContent>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <CardActions>
                <Button size="small" style={{color:"#7FD858"}}>Learn More</Button>
            </CardActions>
            </div>
        </Card>
    );
}

export default CustomCard;