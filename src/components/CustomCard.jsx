import React from "react";

import { 
    Card, CardContent, CardActions, Button,
    CardMedia,
    Chip,
} from '@mui/material';
import data from "../data";

function CustomCard({item}){

    return(
        <Card 
        elevation={item.category !== 'Pub' ? 1 : 0} 
        
        sx={
            item.category !== 'Pub' ? { 
                maxWidth: 300, 
                height:400,
                display:'flex',
                flexDirection:'column' 
            } : {
                maxHeight:300
            }
        }
        style={
            item.category !== 'Pub' ? {
                color:data.colors.primary, 
                background:'transparent',
                borderColor:'transparent'
            }:
            {
                color:data.colors.primary, 
                background:'transparent', 
                borderColor:'transparent'   
            }
        }>
            {item.img ?
            <CardMedia
                image={item.img}
                sx={{ height: 140 }}
                
            />:<div></div>
            }

            <CardContent>
                <h6 style={{fontSize:'medium',margin:0}}>{item.title}</h6>
                <p>{item.shortDescription}</p>
                {item.category !== 'Pub' && item.skills.map(((sk,skidx) =>(
                    <Chip label={sk} variant="outlined" color="success" style={skidx !== 0 ? {marginLeft:5}:{marginLeft:0}}/>
                )))}
            </CardContent>
            
            <CardActions disableSpacing sx={{ mt: "auto" }}>
                <Button 
                    size="small" 
                    style={{color:data.colors.primary}} 
                    href={item.GitHubLink}
                    fullWidth
                    >Learn More</Button>
            </CardActions>
            
        </Card>
    );
}

export default CustomCard;