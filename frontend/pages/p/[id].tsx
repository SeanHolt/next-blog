import Router from "next/router";
import React from "react";
import { GetServerSideProps } from "next";
import { fetchDelete, fetchGet, fetchPut } from "@/lib/fetch";
import { PostComment, type Post as PostType } from "@/lib/types";
import AddComment from "@/components/AddComment";
import Comments from "@/components/Comments";
import { MdPreview } from "md-editor-rt";
import Head from "next/head";

type Props = {
  post: PostType;
};
const Post: React.FC<Props> = (props) => {
  if (!props || !props.post || !props.post.author) return <p>ERROR : No post supplied</p>;
  let title = !props.post.published
    ? `${props.post.title} (Draft)`
    : props.post.title;
  const destroy = async (id: number): Promise<boolean> => {
    await fetchDelete(`post/${id}`);
    return Router.push("/");
  };
  const publish = async (id: number): Promise<boolean> => {
    await fetchPut(`publish/${id}`);
    return Router.push("/drafts");
  };
  return (
    <>
      <Head>
        <title>{props.post.title} | NextBlog</title>
      </Head>
      <div className="page">
        <h2>{title}</h2>
        <p>By {props.post.author?.name || "Unknown author"}</p>
        <MdPreview
          previewTheme="dark"
          editorId="editorId"
          modelValue={props.post.content}
        />
        <div className="actions">
          {!props.post.published && (
            <button onClick={() => publish(props.post.id)}>Publish</button>
          )}
          <button onClick={() => destroy(props.post.id)}>Delete</button>
        </div>
      </div>
      <h3>Comments</h3>
      <AddComment postId={props.post.id} />
      <Comments comments={props.post.comments as PostComment[]} />
      <style jsx>{`
        .page {
          background: white;
          padding: 2rem;
        }
        .actions {
          margin-top: 2rem;
        }
        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }
        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params) return { props: {} };
  const data = await fetchGet<PostType[]>(`post/${context.params.id}`);
  return { props: { post: data } };
};
export default Post;
