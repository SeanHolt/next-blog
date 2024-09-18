import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname ||
    (router.pathname.startsWith("/p") && pathname === "/");
  return (
    <nav>
      <div className="left">
        <a href="/" data-active={isActive("/")} className="link">
          Blog
        </a>
        <a className="link" href="/drafts" data-active={isActive("/drafts")}>
          Drafts
        </a>
        <a className="link" href="/about" data-active={isActive("/about")}>
          About
        </a>
      </div>
      <div className="right">
        <a className="link" href="/create" data-active={isActive("/create")}>
          + Create
        </a>
        {!session ? (
          <>
            <a
              className="link"
              href="/signup"
              data-active={isActive("/signup")}
            >
              Signup
            </a>
            <a className="link" href="#" onClick={() => signIn()}>
              Sign In
            </a>
          </>
        ) : (
          <a className="link signout" href="#" onClick={() => signOut()}>
            Sign Out
          </a>
        )}
      </div>
      <style jsx>{`
        nav {
          display: flex;
          padding: 2rem;
          align-items: center;
          border-bottom: 1px solid gray;
        }
        .link {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }
        .link + .link {
          margin-left: 1rem;
        }
        nav .left .link[data-active="true"] {
          color: gray;
          font-weight: bold;
        }

        .bold {
          font-weight: bold;
        }
        nav .right {
          margin-left: auto;
        }

        .right a {
          border: 1px solid black;
          padding: 0.5rem 1rem;
          border-radius: 3px;
        }
      `}</style>
    </nav>
  );
};
export default Header;
