export default function Subreddit({subreddit, onClick}) {
    return (
        <li>
            <div onClick={() => onClick(subreddit)}>
                <img src='#'/>
                {subreddit}
            </div>
        </li>
    )
}