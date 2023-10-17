import styled from "@emotion/styled";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Images } from "./Images";

export const ImageList= ({result})=> {

      
    return(
        result.map((img)=> (
            <div key={img.id}>
                <Images img= {img} />
            </div>
        ))
        
    )
}

{/* <Card sx={{ maxWidth: 345 }}>
    
    <CardMedia
      component="img"
      height="194"
      image=""
      alt="Paella dish"
    />
      <CardHeader
      avatar={
          <Avatar alt="Remy Sharp" src="" />
        }
      
      title="Shrimp and Chorizo Paella"
      subheader="September 14, 2016"
    />
    <CardActions disableSpacing>
      <ThumbUpOffAltIcon /> 
      <IconButton aria-label="share">
      3.4k
      </IconButton>
     
    </CardActions>
   

  </Card> */}