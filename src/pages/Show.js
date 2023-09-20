import { Link, useLoaderData } from "react-router-dom"

// destructuring props needed to get post
const Show = () => {
    const post = useLoaderData();
    
    // STYLES
    const div = {
        textAlign: "center",
        border: "3px solid red",
        width: "80%",
        margin: "30px auto",
    };

    return (
        <div style={div}>
            <h1>{post.name}</h1>
            <h2>{post.origin_country}</h2>
            <h2>{post.type}</h2>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
};

export default Show;