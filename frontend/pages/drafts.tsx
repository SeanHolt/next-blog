import { GetServerSideProps } from "next";
import Post from "@/components/Post";
import { fetchGet } from "@/lib/fetch";
import { type Post as PostType } from "@/lib/types";
import { getServerSession, Session } from "next-auth";
import Head from "next/head";
import { authOptions } from "@/lib/auth";

type Props = {
  drafts: PostType[];
};

const Drafts: React.FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Drafts | NextBlog</title>
      </Head>
      <div className="page">
        <h1>Drafts</h1>
        <main>
          {props.drafts.length === 0 ? (
            <p>No posts.</p>
          ) : (
            props.drafts.map((post) => (
              <div key={post.id} className="post">
                <Post post={post} />
              </div>
            ))
          )}
        </main>
      </div>
      <style jsx>{`
        p {
            background: white;
            transition: box-shadow 0.1s ease-in;
        }
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }
        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }
        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  req,
  res,
}) => {
  const sess = (await getServerSession(req, res, authOptions)) as Session;
  if (!sess) {
    return { props: { drafts: [] } };
  }
  const drafts = await fetchGet<PostType[]>(`drafts/${sess.user.id}`);
  return {
    props: {
      drafts,
    },
  };
};

export default Drafts;
