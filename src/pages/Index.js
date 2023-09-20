import Post from "../components/Post"
import { useLoaderData, Form } from "react-router-dom";

const Index = (props) => {
    const cheeses = useLoaderData()
    
    // for each post in the array render a Post component
    return <>
    <div style={{textAlign:"center"}}>
        <h2>Add a Cheese</h2>
        <Form action="/create" method="post">
            <input type="text" name="name" placeholder="Name of cheese"/>
            <input type="text" name="origin_country" placeholder="Country of origin"/>
            <input type="text" name="type" placeholder="Type of cheese"/>
            <button>ADD CHEESE</button>
        </Form>
    </div>
    {cheeses.map((post) => <Post post={post} key={post.id} />)}
    </>;
};

export default Index;