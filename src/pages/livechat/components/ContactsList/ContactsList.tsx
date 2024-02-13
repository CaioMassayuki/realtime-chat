import Contact from "./Contact";

const DEFAULT_CONTACTS = [
    "BLABLABALBLAA IOGRNAIU GNRIU GNAER IURENAIGNUR",
    "BLABLABALBLAA IOGRNAIU GNRIU GNAER IURENAIGNUR",
    "BLABLABALBLAA IOGRNAIU GNRIU GNAER IURENAIGNUR",
    "BLABLABALBLAA IOGRNAIU GNRIU GNAER IURENAIGNUR",
    "BLABLABALBLAA IOGRNAIU GNRIU GNAER IURENAIGNUR",
]

function ContactsList() {
  return (
    <div className="h-[calc(100vh-140px)] flex flex-col overflow-y-auto">
      <input className='border-b' placeholder="Search" />
      <div className="my-4 grid grid-flow-row gap-4">
      {DEFAULT_CONTACTS.map((item, index) => (
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
