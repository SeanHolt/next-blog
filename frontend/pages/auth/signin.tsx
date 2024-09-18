import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getCsrfToken } from "next-auth/react";
import Input from "../../components/Input";
import Head from "next/head";

type Props = {
  csrfToken: string | undefined;
};
export const Signin: React.FC<Props> = ({
  csrfToken,
}) => {
  return (
    <>
        <Head>
            <title>Sign In | NextBlog</title>
        </Head>
      <div className="page">
        <form method="post" action="/api/auth/callback/credentials">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <input name="username" type="text" placeholder="Email Address" />
          <input name="password" type="password" placeholder="Password" />
          <Input value="Sign In" type="submit" />
        </form>
      </div>
      <style jsx>
        {`
          .page {
            background: white;
            padding: 3rem;
            display: flex;
            justify-content: center;
          }

          input[type="text"],
          input[type="email"],
          input[type="password"] {
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
        `}
      </style>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
export default Signin;
