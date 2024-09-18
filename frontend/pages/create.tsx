import Router from "next/router";
import { useState } from "react";
import { LinkButton } from "../components/LinkButton";
import { useSession } from "next-auth/react";
import { fetchPost } from "@/lib/fetch";
import { MdEditor } from "md-editor-rt";
import "md-editor-rt/lib/style.css";
import Head from "next/head";

const Draft: React.FC = () => {
  const [text, setText] = useState<string>("**Hello world!!!**");
  const [title, setTitle] = useState<string>("");
  const { data: session,  } = useSession();
  const [error, setError] = useState<string>("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content: text, authorEmail: session?.user?.email };
      if (body.authorEmail) {
        await fetchPost("post", body);
        await Router.push("/drafts");
      } else {
        setError("No email sent.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err);
    }
  };
  return session ? (
    <>
      <Head>
        <title>Create Blog | NextBlog</title>
      </Head>
      <div className="page">
        {error && <p>{error}</p>}
        <form onSubmit={submitData}>
          <h1>Create Draft</h1>
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <MdEditor
            language="en-US"
            editorId="editorId"
            modelValue={text}
            onChange={setText}
          />
          <div className="buttons">
            <input disabled={!text || !title || !session?.user?.email} type="submit" value="Create" />
            <LinkButton
              className="back"
              href="#"
              onClick={() => Router.push("/")}
              text="Cancel"
            />
          </div>
        </form>
      </div>
      <style jsx>{`
        .buttons {
          margin-top: 8px;
        }
        p.error {
          padding: 3rem;
          border: 1px solid red;
          border-radius: 8px;
        }
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
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
    </>
  ) : (
    <p>Not authorized</p>
  );
};
export default Draft;
