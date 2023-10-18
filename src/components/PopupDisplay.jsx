import { Avatar, Card, CardActions, CardHeader, CardMedia, IconButton, Modal } from "@mui/material"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const PopupDisplay = ({img,setShowModal}) => {
  return (
    <div style={{position:"fixed",top:0, bottom:0, left:0, right:0,backgroundColor:"rgba(189,189,189,0.9)" }}>
        <div style={{display:"flex", padding:"20px", fontSize:"40px", flexDirection:"row-reverse"}} onClick={()=> setShowModal(false)}>
          <div style={{cursor:"pointer"}}>

        <AiOutlineClose  />
          </div>
        </div>

    <div style={{display:"flex", height:"85% ",justifyContent:"center", alignItems:"center"}}   >
     <Card sx={{ width: '50%', height:'80%'}}  >

     <CardMedia
       component="img"
       height="500"
       image={img.urls.full} 
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
   
   </div>
  )
}

export default PopupDisplay
