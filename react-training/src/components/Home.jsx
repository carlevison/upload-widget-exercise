import { Link } from "react-router-dom";

function Home() {

    return (
        <>
        <h1>Welcome Home!</h1>
        <Link to="./Upload" relative="path">Upload</Link>
        </>
    )

}

export default Home