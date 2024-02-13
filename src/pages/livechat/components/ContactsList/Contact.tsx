import { ContactType } from "./ContactsList";

export type ContactProps = Omit<ContactType, 'id'>

function Contact({user, lastMessage, picture, lastMessageDate}: ContactProps) {
  return (
    <button className="flex">
      <img className="size-8 rounded-full bg-black" src={picture} />
      <div className="w-48 flex flex-col text-start">
        <p className="font-semibold">{user}</p>
        <span className="text-nowrap overflow-ellipsis overflow-x-hidden">{lastMessage}</span>
      </div>
    </button>
  );
}

export default Contact;
