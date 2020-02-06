import React, {useState} from "react";
import dummyData from "../dummy-data";
import PostBody from "./PostBody";
import "../Posts.css"


const Post = () =>{
    const [data] = useState(dummyData);

    return(
        <div>
            <PostBody postData={data} key={data}/>
        </div>
    );
}
export default Post;