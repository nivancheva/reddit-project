import "./Posts.css"
import humanizeDuration from "humanize-duration";

function getCreatedString(dateInSeconds) {
    let now = new Date();
    let created = new Date(dateInSeconds * 1000); // convert to miliseconds
    let duration = now - created;

    return humanizeDuration(duration, { units: ["y", "mo", "w", "d", "h"], round: true });
}

export default function Post({post}) {
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
                        <button>Comments</button>
                        <span>{post.data.num_comments}</span>
                    </div>
                    </div>  
                </div>
            </div>
        </article>
    )
}