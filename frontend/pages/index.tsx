import { GetServerSideProps } from "next";
import Head from "next/head";
import Post from "@/components/Post";
import { fetchGet } from "@/lib/fetch";
import { type Post as PostType } from "@/lib/types";

type Props = {
  feed: PostType[];
};

const Blog: React.FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Home | NextBlog</title>
      </Head>
      <div className="page">
        <h1>My Blog</h1>
        <main>
          {props.feed && props.feed.length === 0 ? (
            <p>No posts.</p>
          ) : (
            props.feed.map((post) => <Post key={post.id} post={post} />)
          )}
        </main>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const feed = await fetchGet<PostType>("feed");
  return {
    props: {
      feed,
    },
  };
};

export default Blog;
