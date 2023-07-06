import { useEffect, useRef } from 'react';

const UploadWidget = ({cloud,preset,setImgUrl,setPublicId}) => {

    const cloudinaryRef = useRef();
    const widgetRef = useRef();

     useEffect( () => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: cloud,
            uploadPreset: preset
        }, function(error, result){
            console.log(result);
            if (result.info.secure_url) {
                console.log("Setting imgUrl to " + result.info.secure_url + "and publicId to " + result.info.public_id);
                setImgUrl(result.info.secure_url);
                setPublicId(result.info.public_id);
            }
            
        });
        widgetRef.current.open();
    }, []) 
}

export default UploadWidget