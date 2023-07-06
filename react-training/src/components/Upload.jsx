import { useState } from 'react'
import {Helmet} from "react-helmet";
import UploadWidget from './UploadWidget';
import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {scale} from "@cloudinary/url-gen/actions/resize";


function Upload() {

    const [cloud, setCloud] = useState("");
    const [preset, setPreset] = useState("");
    const [transformation, setTransformation] = useState("");
    const [showUw, setShowUw] = useState(false);
    const [showTransformedImage, setShowTransformedImage] = useState(false);
    const [imgUrl, setImgUrl] = useState("");
    const [publicId, setPublicId] = useState("");

    function transformImage() {
        const cld = new Cloudinary({
            cloud: {
              cloudName: cloud
            }
          });

          const myImage = cld.image(publicId); 
          myImage.addTransformation(transformation)
          .resize(scale(500))
          .format('auto')
          .quality('auto');

          return myImage;
    }

    return (
        <>
        <Helmet>
            <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" crossOrigin="anonymous" async></script>
        </Helmet>
        <h1>Upload an image!</h1>
            <label> Cloud name: &nbsp;
                <input name="cloudName" onChange={e => setCloud(e.target.value)}/>
            </label>

            <label> Upload preset: &nbsp;
                <input name="uploadPreset" onChange={e => setPreset(e.target.value)}/>
            </label>

            {cloud !== '' && preset !== '' && 
            <div>
                <br/>
            <button onClick={() => setShowUw(true)}>
                Open Upload Widget
            </button>
            { showUw &&
                <UploadWidget cloud={cloud} preset={preset} imgUrl={imgUrl} setImgUrl={setImgUrl} publicId={publicId} setPublicId={setPublicId}/>
            }
            
            </div>   
            }

            <div>
            {imgUrl && (
                <>
                <p><img src={ imgUrl } alt="Uploaded resource" width="400" /></p>
               
                <label> Transformation: &nbsp;
                    <input name="transformation" onChange={e => setTransformation(e.target.value)}/>
                </label>
                <br/>
                <br/>
                <button onClick={() => setShowTransformedImage(true)}>
                    Transform Image
                </button>
                <br/>
                <br/>
                </>
            )}
            {showTransformedImage && (
                <>
                <AdvancedImage cldImg={transformImage()} />
                </>
            )}
            </div>

        </>
    )

}

export default Upload