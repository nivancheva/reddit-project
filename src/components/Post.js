import "./Posts.css"
import { useState, useEffect } from "react";
import getCreatedString from "../helpers/getCreatedString";

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
                    <button>up</button>
                    <p>{post.data.ups}</p>
                    <button>down</button>
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
                        <div>
                            <button onClick={() => toggleComments()}>Comments</button>
                            <span>{post.data.num_comments}</span>
                        </div>
                    </div>
                    <div className="comments">
                        {comments.map((comment, idx) => {
                            return (
                                <div className="comment-metadata" key={idx}>
                                    <div>
                                        <img src="#"/>
                                        <span>{comment.data.author}</span>
                                        <p>{getCreatedString(comment.data.created)}</p>
                                    </div>
                                    <p>{comment.data.body}</p>
                                </div>
                            )
                            })}
                    </div>
                </div>
            </div>
        </article>
    )
}