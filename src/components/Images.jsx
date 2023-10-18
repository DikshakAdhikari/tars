import { Avatar, Card, CardActions, CardHeader, CardMedia, IconButton, Modal } from "@mui/material"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useState } from "react";
import PopupDisplay from "./PopupDisplay";

export const Images= ({img, setImgContent, setShowModal}) => {
    
    
    
    return (
        <>
        <div style={{width:"100%", height:"100%", cursor:"pointer" }}  onClick={()=>{
            setImgContent(img);
            setShowModal(true);

            }} >
         <Card sx={{ width:"20vw", height:"40vh" }}>
    
         <CardMedia
           component="img"
           height="250"
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