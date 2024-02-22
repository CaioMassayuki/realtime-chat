import { ChatResume } from "../../../../config/definitions";

type ContactProps = Pick<ChatResume, "title" | "picture" | "lastMessage"> & {
  lastMessageTime?: string;
};

function Contact({ title, lastMessage, picture }: ContactProps) {
  return (
    <button className="flex">
      <img className="size-8 rounded-full bg-black" src={picture} />
      <div className="w-48 flex flex-col text-start">
        <p className="font-semibold">{title}</p>
        <span className="text-nowrap overflow-ellipsis overflow-x-hidden">
          {lastMessage}
        </span>
      </div>
    </button>
  );
}

export default Contact;
