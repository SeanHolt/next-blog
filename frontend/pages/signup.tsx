import Router from "next/router";
import { useState } from "react";
import Input from "../components/Input";
import { LinkButton } from "../components/LinkButton";
import { fetchPost } from "@/lib/fetch";
import Head from "next/head";

const Signup: React.FC = () => {
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState<string>(""),
    [confpass, setConfPassword] = useState<string>(""),
    [error, setError] = useState<string>("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { name, email, password };
      const res = await fetchPost("register", body);
      if (res && res.message) {
        setError(res.message);
      } else {
        await Router.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Head>
        <title>Sign Up | NextBlog</title>
      </Head>
      <div className="page">
        <form onSubmit={submitData}>
          {error && <p className="error">{error}</p>}
          <h1>Signup User</h1>
          <Input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            autoFocus={true}
          />
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confpass}
            onChange={(e) => setConfPassword(e.target.value)}
          />
          <Input
            type="submit"
            disabled={
              !name || !email || !password || !confpass || password !== confpass
            }
            value="Signup"
          />
          <LinkButton
            className="back"
            href="#"
            onClick={() => Router.push("/")}
            text="Cancel"
          />
        </form>
      </div>
    </>
  );
};

export default Signup;
