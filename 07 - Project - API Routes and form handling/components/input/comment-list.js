import classes from "./comment-list.module.css";

function CommentList({ comments }) {
	console.log(comments)
  return (
    <ul className={classes.comments}>
      {comments && comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.email}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
