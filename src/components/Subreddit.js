import './Subreddits.css'

export default function Subreddit({subreddit, onClick}) {
    return (
        <li>
            <div className='subreddit' onClick={() => onClick(subreddit)}>
                <img className="subreddit_img" src={subreddit.data.header_img}/>
                {subreddit.data.title}
            </div>
        </li>
    )
}