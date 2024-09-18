import { fetchPost } from "@/lib/fetch";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useState } from "react";

type Props = {
  postId: number;
};
export default function AddComment(props: Props) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { data: session } = useSession();
  const [showhide, setShowhide] = useState<boolean>(true);

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content, authorEmail: session?.user?.email };
      if (body.authorEmail) {
        const comment = await fetchPost("comment/" + props.postId, body);
        console.log("comment = ", comment);
        await Router.push("/p/" + props.postId);
      } else {
        setError("No author set");
      }
    } catch (err: any) {
      console.error(err);
      setError(err);
    }
  };
  return session ? (
    <div className="add-comment">
      {error && <p>{error}</p>}
      <p
        className="add-link"
        onClick={() => {
          setShowhide(!showhide);
        }}
      >
        {showhide ? "Add comment" : "Hide comment"}
      </p>
      <form onSubmit={submitData} hidden={showhide}>
        <h1>Create Comment</h1>
        <div>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea
            rows={10}
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Comment"
            value={content}
          ></textarea>
          <input disabled={!content || !title} type="submit" value="Create" />
        </div>
      </form>
      <style jsx>{`
        .add-comment {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .add-link {
          cursor: pointer;
        }
        input[type="text"],
        textarea {
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }
        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }
      `}</style>
    </div>
  ) : (
    <p>You must be logged in to post comments.</p>
  );
}
