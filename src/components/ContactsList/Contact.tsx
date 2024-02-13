export type Contact = {
    user: string,
    lastMessage: string,
    picture: string,
}

function Contact({user, lastMessage, picture}: Contact) {
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
