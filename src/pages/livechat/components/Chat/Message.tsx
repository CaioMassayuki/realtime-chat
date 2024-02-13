import clsx from "clsx";

export type MessageProps = {
  text: string;
  user: string;
  picture: string;
  date: string;
  type: "sender" | "recipient";
};

function Message({ text, user, picture, date, type }: MessageProps) {
  return (
    <div
      className={clsx("my-2 flex [overflow-anchor:none]", {
        "flex-row-reverse": type === "sender",
        "flex-row": type === "recipient",
      })}
    >
      <img className="size-10 bg-black" src={picture} />
      <div
        className={clsx("w-full flex flex-col", {
          "items-end": type === "sender",
          "items-start": type === "recipient",
        })}
      >
        <p>{user}</p>
        <span className="border border-red-500 whitespace-pre-line">{text}</span>
      </div>
    </div>
  );
}

export default Message;
