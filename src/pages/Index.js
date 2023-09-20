import Post from "../components/Post"
import { useLoaderData } from "react-router-dom";

const Index = (props) => {
    const cheeses = useLoaderData()
    // for each post in the array render a post component
    return cheeses.map((post) => <Post post={post} key={post.id} />);
};

export default Index;