import React from "react";

import { 
    Card, CardContent, CardActions, Button,
    CardMedia,
} from '@mui/material';
import data from "../data";

function CustomCard({item}){

    return(
        <Card elevation={item.category !== 'Pub' ? 1 : 0} sx={item.category !== 'Pub' ? { maxWidth: 300, maxHeight:300 } : {maxHeight:300}}
        style={item.category !== 'Pub' ? {
            
            color:data.colors.primary, background:'transparent',borderColor:'transparent'
        }:
        {
            color:data.colors.primary, background:'transparent', borderColor:'transparent'   
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
            </CardContent>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
            <CardActions>
                <Button size="small" style={{color:data.colors.primary}} href={item.GitHubLink}>Learn More</Button>
            </CardActions>
            </div>
        </Card>
    );
}

export default CustomCard;