import { Link, useLoaderData, Form } from "react-router-dom"

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

            <div style={{ textAlign:"center" }}>
                <h2>Update a Cheese</h2>
                <Form action={`/update/${post.id}`} method="post">
                    <input type="text" name="name" placeholder="Name of cheese" defaultValue={post.name}/>
                    <input type="text" name="origin_country" placeholder="Country of origin" defaultValue={post.origin_country}/>
                    <input type="text" name="type" placeholder="Type of cheese" defaultValue={post.type}/>
                    <button>UPDATE CHEESE</button>                    
                </Form>
                <Form action={`/delete/${post.id}`} method="post">
                    <button>DELETE CHEESE</button>
                </Form>
            </div>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default Show;