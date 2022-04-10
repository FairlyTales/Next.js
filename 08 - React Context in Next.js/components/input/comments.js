import { useContext, useEffect, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/notification-context";

const Comments = ({ eventId }) => {
  const notificationCtx = useContext(NotificationContext);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(false);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const fetchComments = () => {
    setLoading(true);

    fetch(`/api/comments/${eventId}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
        setLoading(false);
      });
  };

  useEffect(() => {
    showComments && fetchComments();
  }, [showComments]);

  const addCommentHandler = (commentData) => {
    notificationCtx.showNotification({
      title: "Adding...",
      message: "Adding you comment",
      status: "pending",
    });

    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }) // pretty bad code example, one of the worst in this course
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.message);
        }
      })
      .then(() => {
        notificationCtx.showNotification({
          title: "Comment added",
          message: "Comment added successfully",
          status: "success",
        });
        fetchComments();
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: "Error",
          message: err.message || "Something went wrong",
          status: "error",
        });
      });
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments &&
        (loading ? (
          <p>Loading comments...</p>
        ) : (
          <>
            <NewComment onAddComment={addCommentHandler} />
            <CommentList comments={comments} />
          </>
        ))}
    </section>
  );
};

export default Comments;
