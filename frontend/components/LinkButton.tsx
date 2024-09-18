import { MouseEventHandler } from "react";

type Props = {
  className: string;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  text: string;
};
export const LinkButton: React.FC<Props> = (props: Props) => {
  return (
    <>
      <a className={props.className} href={props.href} onClick={props.onClick}>
        {props.text}
      </a>
      <style jsx>{`
        .back {
          margin-left: 1rem;
          text-decoration: none;
          color: #aaa;
          border: 1px solid black;
          padding: 1rem 2rem;
          border-radius: 3px;
        }
        a.link {
          text-decoration: none;
          color: #000;
          display: inline-block;
        }

        nav .left .link[data-active="true"] {
          color: gray;
        }

        .link + .link {
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
};
