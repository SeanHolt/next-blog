import { PostComment } from "@/lib/types";

type Props = {
  comments: PostComment[];
};
export default function Comments(props: Props) {
  return (
    <div className="comments">
      {props.comments.map((comment) => {
        return (
          <div className="comment" key={comment.id}>
            <p className="comment-title" key={comment.id}>
              {comment.title}
            </p>
            <p className="comment-author">
                By {comment.author?.name || "Unknown Author"}
            </p>
            <p className="comment-content">{comment.content}</p>
          </div>
        );
      })}
      <style jsx>{`
        .comments {
          padding: 2px;
        }
        .comments .comment {
          border: 1px solid black;
          padding: 6px;
          border-radius: 4px;
          margin-bottom: 1rem;
        }
        .comment-author {
            font-size: 12px;
            padding: 0.5rem 1rem;
        }
        .comments .comment-title {
          padding: 1rem;
        }
        .comments .comment-content {
          padding: 1rem;
        }
      `}</style>
    </div>
  );
}
