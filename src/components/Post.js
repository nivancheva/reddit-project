import "./Posts.css"
import { useState, useEffect } from "react";
import getCreatedString from "../helpers/getCreatedString";
import Comment from "./Comment";
import upLong from '../up-long-solid.svg';
import downLong from '../down-long-solid.svg';
import comment from '../message-regular.svg'

const PostsBaseURL = "https://www.reddit.com";

export default function Post({post}) {
    const [comments, setComments] = useState([]);

    function toggleComments() {
        if (comments.length) {
            setComments([]);
        } else {
            getComments();
        }
    }

    async function getComments() {
        const response = await fetch(`${PostsBaseURL}${post.data.permalink}.json`);
        const comment = await response.json();

        setComments(comment[1].data.children);
    }

    return (
        <article>
            <div className='card-wraper'>
                <div className='votes'>
                    <button className="btn"><img src={upLong}/></button>
                    <p>{post.data.ups}</p>
                    <button className="btn"><img src={downLong}/></button>
                </div>
                <div className='card-container'>
                    <h3>{post.data.title}</h3>
                    <img className="post_img" src={post.data.url}/>
                    <div className='post-details'>
                        <div>
                            <img src='#'/>
                            <span>{post.data.author}</span>
                        </div>
                        <p>{getCreatedString(post.data.created)}</p>
                        <div className="btn_section">
                            <button className="btn" onClick={() => toggleComments()}><img src={comment}/></button>
                            <span>{post.data.num_comments}</span>
                        </div>
                    </div>
                    <div className="comments">
                        {comments.map((comment, idx) => {
                            return (
                                <Comment comment={comment} key={idx}/>
                            )
                            })}
                    </div>
                </div>
            </div>
        </article>
    )
}