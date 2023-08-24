export default function Post({post}) {
    return (
        <article>
            <div className='card-wraper'>
                <div className='votes'>
                    <button>up</button>
                    <p>{post.votes}</p>
                    <button>down</button>
                </div>

                <div className='card-container'>
                    <h3>{post.title}</h3>
                    <img src='#'/>
                    <div className='post-details'>
                    <div>
                        <img src='#'/>
                        <span>{post.author}</span>
                    </div>
                    <p>{post.lastEdit}</p>
                    <div>
                        <button>Comments</button>
                        <span>{post.comments}</span>
                    </div>
                    </div>  
                </div>
            </div>
        </article>
    )
}