import { useEffect, useRef } from 'react';
import { useState } from 'react'



const UploadWidget = ({cloud,preset}) => {

    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const [imgUrl, setImgUrl] = useState("");

     useEffect( () => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: cloud,
            uploadPreset: preset
        }, function(error, result){
            console.log(result);
            setImgUrl(result.info.secure_url);
            
        });
        widgetRef.current.open();
    }, []) 
    return (
        <>
        <img src={imgUrl}></img>
        </>
    )
}

export default UploadWidget