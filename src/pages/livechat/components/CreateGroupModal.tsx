import { useReducer, useState } from "react";
import Modal from "../../../components/Modal";
import { MOCK_SESSION } from "../../../store/slices/livechatSessionSlice";

enum CreateGroupFormActionOptions {
  CHANGE_TITLE = "CHANGE_TITLE",
  ADD_MEMBER = "ADD_MEMBER",
  REMOVE_MEMBER = "REMOVE_MEMBER",
}

type CreateGroupFormActions = {
  type: CreateGroupFormActionOptions;
  payload: any;
};

type CreateGroupFormState = {
  title: string;
  members: { name: string; picture: string }[];
};

const initialState: CreateGroupFormState = {
  title: "",
  members: [],
};

const createGroupFormReducer = (
  state: CreateGroupFormState,
  action: CreateGroupFormActions
) => {
  switch (action.type) {
    case CreateGroupFormActionOptions.CHANGE_TITLE:
      return { ...state, title: action.payload };
    case CreateGroupFormActionOptions.ADD_MEMBER:
      console.log(action.payload);
      return { ...state, members: [...state.members, action.payload] };
    case CreateGroupFormActionOptions.REMOVE_MEMBER:
      return {
        ...state,
        members: state.members.filter(
          (member) => member.name !== action.payload
        ),
      };
  }
};

interface CreateGroupModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

function CreateGroupModal({ isOpen, handleClose }: CreateGroupModalProps) {
  const [createGroupFormState, createGroupFormDispatch] = useReducer(
    createGroupFormReducer,
    initialState
  );
  const [searchInput, setSearchInput] = useState<string>("");

  const filteredContacts = MOCK_SESSION.user.contacts
    .filter(
      (contact) =>
        !createGroupFormState.members.some((member) => contact.name === member.name)
    )
    .filter((contact) => {
      return searchInput
        ? contact.name.toUpperCase().includes(searchInput.toUpperCase())
        : contact;
    });

  return (
    <Modal isOpen={isOpen} title="Nova conversa" handleClose={handleClose}>
      <div className="text-white grid grid-flow-row gap-4 p-4">
        <div className="flex flex-col">
          <label htmlFor="group_name">
            <h3>Título do Grupo:</h3>
          </label>
          <input
            id="group_name"
            className="text-black"
            placeholder="Digite o titulo do grupo"
            value={createGroupFormState.title}
            onChange={(e) =>
              createGroupFormDispatch({
                type: CreateGroupFormActionOptions.CHANGE_TITLE,
                payload: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-col">
          <h3>Membros:</h3>
          <div className="border rounded-md w-[400px] h-44 p-1 overflow-y-auto flex flex-wrap">
            {createGroupFormState.members.map((member) => (
              <button
                className="h-9 border-2 rounded-full my-1 mr-2 flex"
                onClick={() => {
                  createGroupFormDispatch({
                    type: CreateGroupFormActionOptions.REMOVE_MEMBER,
                    payload: member.name,
                  });
                }}
              >
                <img className="size-8 rounded-full bg-black" src="" />
                <p className="mx-2 font-semibold text-lg">{member.name}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="search_contacts">
            <h3>Pesquisar contatos:</h3>
          </label>
          <input
            id="search_contacts"
            className="text-black"
            placeholder="Procure por seus contatos"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="border rounded-md w-[400px] h-44 p-1 overflow-y-auto flex flex-wrap">
          {filteredContacts.map((contact) => (
            <button
              className="h-9 border-2 rounded-full my-1 mr-2 flex"
              onClick={() => {
                createGroupFormDispatch({
                  type: CreateGroupFormActionOptions.ADD_MEMBER,
                  payload: { name: contact.name, picture: contact.picture },
                });
              }}
            >
              <img className="size-8 rounded-full bg-black" src="" />
              <p className="mx-2 font-semibold text-lg">{contact.name}</p>
            </button>
          ))}
        </div>
        <button className="border border-green-500 p-2 rounded-md ml-auto">
          Criar grupo
        </button>
      </div>
    </Modal>
  );
}

export default CreateGroupModal;
