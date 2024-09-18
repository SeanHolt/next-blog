import Layout from "@/components/Layout";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

type Props = {};
export const metadata: Metadata = {
  title: {
    template: "%s | NextBlog",
    default: "NextBlog",
  },
};
export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
