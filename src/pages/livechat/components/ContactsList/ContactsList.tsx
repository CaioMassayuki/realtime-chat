import { useState } from "react";
import Contact from "./Contact";
import useLiveChatStore from "../../../../store/store";
import CreateGroupModal from "../CreateGroupModal";
import GroupIcon from "../../../../../public/group-icon.svg";
import PersonAddIcon from "../../../../../public/person-add-icon.svg";
import { ChatResume } from "../../../../config/definitions";
import AddContactModal from "../AddContactModal";

export type ContactsListProps = {
  chats: ChatResume[];
};

function ContactsList({ chats }: ContactsListProps) {
  const [filteredContacts, setFilteredContacts] = useState<ChatResume[]>(chats);
  const [isGroupModalOpen, setIsGroupModalOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
  const liveChatState = useLiveChatStore.getState();

  const handleSearchContacts = (search: string) => {
    search
      ? setFilteredContacts(
          filteredContacts.filter((contact) =>
            contact.title.toUpperCase().includes(search.toUpperCase())
          )
        )
      : setFilteredContacts(chats);
  };

  return (
    <div className="h-[calc(100vh-140px)] flex flex-col overflow-y-auto">
      <CreateGroupModal
        isOpen={isGroupModalOpen}
        handleClose={() => {
          setIsGroupModalOpen(false);
        }}
      />
      <AddContactModal
        isOpen={isContactModalOpen}
        users={liveChatState.users.users}
        handleClose={() => {
          setIsContactModalOpen(false);
        }}
      />
      <div className="flex justify-between">
        <input
          className="border-b"
          placeholder="Search"
          onChange={(e) => handleSearchContacts(e.target.value)}
        />
        <button
          className="bg-neutral-500/20 rounded-full p-2"
          onClick={() => setIsContactModalOpen(true)}
        >
          <img src={PersonAddIcon} />
        </button>
        <button
          className="bg-neutral-500/20 rounded-full p-2"
          onClick={() => setIsGroupModalOpen(true)}
        >
          <img src={GroupIcon} />
        </button>
      </div>
      <div className="my-4 grid grid-flow-row gap-4">
        {filteredContacts.map((contact, index) => (
          <Contact
            key={`${index}+${contact.id}`}
            title={contact.title}
            picture={contact.picture}
            lastMessage={contact.lastMessage}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactsList;
