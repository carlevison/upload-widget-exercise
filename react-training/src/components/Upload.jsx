import { useState } from 'react'
import {Helmet} from "react-helmet";
import UploadWidget from './UploadWidget';

function Upload() {

    const [cloud, setCloud] = useState("");
    const [preset, setPreset] = useState("");
    const [showUw, setShowUw] = useState(false);

    return (
        <>
        <Helmet>
            <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" crossOrigin="anonymous" async></script>
        </Helmet>
        <h1>Welcome Upload!</h1>
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
                <UploadWidget cloud={cloud} preset={preset}/>
            }
            
            </div>   
            }

        </>
    )

}

export default Upload