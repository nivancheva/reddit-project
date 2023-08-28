import './Subreddits.css'

export default function Subreddit({subreddit, onClick}) {
    const imgSrc = subreddit.data.header_img || "#";
    
    return (
        <li>
            <div className='subreddit' onClick={() => onClick(subreddit)}>
                <div>
                    <img className="subreddit_img" src={imgSrc}/>
                </div>
                {subreddit.data.title}
            </div>
        </li>
    )
}