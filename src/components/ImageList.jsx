import styled from "@emotion/styled";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { Images } from "./Images";
import { useState } from "react";
import PopupDisplay from "./PopupDisplay";

export const ImageList= ({result})=> {
    const [imgContent, setImgContent] = useState({})
    const [showModal, setShowModal]= useState(false);
      
    return(
        <div >
        <div style={{display:"flex", flexWrap:"wrap", gap:"15px", justifyContent:"center"}}>
        {result.map((img)=> (
            <div  key={img.id}>
                <Images img= {img} setImgContent={setImgContent} setShowModal={setShowModal} />
            </div>
        ))}
        </div > 
        {showModal && <PopupDisplay img={imgContent}  setImgContent={setImgContent}/>}
        </div>
        
    )
}

