import Contact from "./Contact";

function ContactsList() {
  return (
    <div className="h-[calc(100vh-140px)] flex flex-col overflow-y-auto">
      <input className='border-b' placeholder="Search" />
      <div className="my-4 grid grid-flow-row gap-4">
      {[''].map((item, index) => (
          <Contact
          key={`${index}+${item.slice(0,3)}`}
          user="USER"
          lastMessage={item}
          picture=""
        />
        ))}
      </div>
    </div>
  );
}

export default ContactsList;
