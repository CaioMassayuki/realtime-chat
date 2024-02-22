import { useState } from "react";
import Modal from "../../../components/Modal";
import { User } from "../../../config/definitions";

interface AddContactModalProps {
  isOpen: boolean;
  users: Omit<User, "password">[];
  handleClose: () => void;
}

function AddContactModal({ isOpen, users, handleClose }: AddContactModalProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  const filteredUserList = users.filter((user) =>
    searchInput
      ? user.name.toUpperCase().includes(searchInput.toUpperCase())
      : user
  );
  return (
    <Modal isOpen={isOpen} title="Adicionar Usuário" handleClose={handleClose}>
      <div className="text-white grid grid-flow-row gap-4 p-4">
        <input
          className="text-black"
          placeholder="Pesquisar por usuário"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div className="flex flex-col">
          <h3>Membros:</h3>
          <div className="border rounded-md w-[400px] h-44 p-1 overflow-y-auto flex flex-wrap">
            {filteredUserList.map((user) => (
              <button className="h-9 border-2 rounded-full my-1 mr-2 flex">
                <img className="size-8 rounded-full bg-black" src="" />
                <p className="mx-2 font-semibold text-lg">{user.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AddContactModal;
