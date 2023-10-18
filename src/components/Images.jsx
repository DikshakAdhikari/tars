import { Avatar, Card, CardActions, CardHeader, CardMedia, IconButton, Modal } from "@mui/material"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useState } from "react";
import PopupDisplay from "./PopupDisplay";

export const Images= ({img, setImgContent, setShowModal}) => {
    
    
    
    return (
        <>
        <div style={{width:"20vw", cursor:"pointer" }}  onClick={()=>{
            setImgContent(img);
            setShowModal(true);

            }} >
         <Card sx={{ maxWidth: 345 }}>
    
         <CardMedia
           component="img"
           height="194"
           image={img.urls.thumb} 
           alt="Paella dish"
         />
           <CardHeader
           avatar={
               <Avatar alt="Remy Sharp" src={img.user.profile_image.medium} />
             }
           
           title={img.user.name}
           subheader={img.user.instagram_username}
         />
         <CardActions disableSpacing>
           <ThumbUpOffAltIcon /> 
           <IconButton aria-label="share">
           {img.likes}
           </IconButton>
          
         </CardActions>
        
     
       </Card> 
       </div>
       
       </>
    )
}