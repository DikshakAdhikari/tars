
export const Images= ({img}) => {
    
    return (
        <div style={{display:"flex"}}>
        
            {img.user.name}
            {/* {img.user.instagram_username} */}
            <img src={img.user.profile_image.medium} alt="" />
            {img.cover_photo.likes}
            {img.title}
            <img src={img.cover_photo.urls.thumb} alt="fgf" />

        </div>
    )
}