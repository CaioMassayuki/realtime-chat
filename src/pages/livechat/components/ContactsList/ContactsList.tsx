import { useState } from "react";
import Contact from "./Contact";

export type ContactType = {
  id: string;
  user: string;
  picture: string;
  lastMessage: string;
  lastMessageDate: string;
};

export type ContactsListProps = {
  contacts: ContactType[];
};

function ContactsList({ contacts }: ContactsListProps) {
  const [filteredContacts, setFilteredContacts] =
    useState<ContactType[]>(contacts);

  const handleSearchContacts = (search: string) => {
    search
      ? setFilteredContacts(
          filteredContacts.filter((contact) => contact.user.toUpperCase().includes(search.toUpperCase()))
        )
      : setFilteredContacts(contacts);
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col overflow-y-auto">
      <input
        className="border-b"
        placeholder="Search"
        onChange={(e) => handleSearchContacts(e.target.value)}
      />
      <div className="my-4 grid grid-flow-row gap-4">
        {filteredContacts.map((contact, index) => (
          <Contact
            key={`${index}+${contact.id}`}
            user={contact.user}
            lastMessage={contact.lastMessage}
            picture={contact.picture}
            lastMessageDate={contact.lastMessageDate}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactsList;
