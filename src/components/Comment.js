import getCreatedString from "../helpers/getCreatedString";

export default function Comment({comment}) {
    return (
        <div className="comment-metadata">
            <div className="comment-autor">
                <img src="#"/>
                <span>{comment.data.author}</span>
                <p>{getCreatedString(comment.data.created)}</p>
            </div>
            <p>{comment.data.body}</p>
        </div>
    )
}