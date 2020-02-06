import React from "react";
import "../Posts.css"
import styled ,{createGlobalStyle} from 'styled-components/macro';

const PostDes = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const PostBody = props =>{
    console.log(props.username)
    return (
        <div className="post-header">
            {props.postData.map(data =>(
                <PostDes>
                    <div className="post-thumb-wrapper">
                        <img
                            alt="post header"
                            className="post-thumb"
                            src={data.thumbUrl}
                        />
                    </div>
                    <h2>{data.username}</h2>
                    <h1>{data.title}</h1>
                </PostDes>

            ))}
            
        </div>
    );
}

export default PostBody;