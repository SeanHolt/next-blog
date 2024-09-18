import { ChangeEventHandler } from "react";

type Props = {
  type: string;
  autoFocus?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value: string;
  disabled?: boolean;
};
export const Input: React.FC<Props> = (props: Props) => {
  return (
    <>
      <input
        type={props.type}
        autoFocus={props.autoFocus ? true : false}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
      />
      <style jsx>{`
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
      `}</style>
    </>
  );
};
export default Input;
