import { LiveChatSession, User } from "../../config/definitions";
import { StateSlice } from "../store";

export interface LiveChatSessionSlice {
  session: LiveChatSession | null;
  startSession: (user: Omit<User, "password">) => void;
  userId: () => string | undefined;
}

export const MOCK_SESSION: LiveChatSession = {
  user: {
    id: "4a2aa8c8-612f-4bff-b97e-9c3e69796610",
    name: "a",
    picture: "",
    contacts: [
      {
        id: "1",
        name: "João",
        picture: "https://example.com/picture1.jpg",
      },
      {
        id: "2",
        name: "Cleber",
        picture: "",
      },
      {
        id: "3",
        name: "Maria",
        picture: "https://example.com/picture3.jpg",
      },
      {
        id: "4",
        name: "Pedro",
        picture: "https://example.com/picture4.jpg",
      },
      {
        id: "5",
        name: "Ana",
        picture: "",
      },
      {
        id: "6",
        name: "Lucas",
        picture: "https://example.com/picture6.jpg",
      },
      {
        id: "7",
        name: "Juliana",
        picture: "",
      },
      {
        id: "8",
        name: "Marcos",
        picture: "https://example.com/picture8.jpg",
      },
      {
        id: "9",
        name: "Renata",
        picture: "",
      },
      {
        id: "10",
        name: "Rafael",
        picture: "https://example.com/picture10.jpg",
      },
      {
        id: "11",
        name: "Camila",
        picture: "",
      },
      {
        id: "12",
        name: "Gustavo",
        picture: "https://example.com/picture12.jpg",
      },
      {
        id: "13",
        name: "Carla",
        picture: "",
      },
      {
        id: "14",
        name: "Fernando",
        picture: "https://example.com/picture14.jpg",
      },
      {
        id: "15",
        name: "Mariana",
        picture: "",
      },
      {
        id: "16",
        name: "Larissa",
        picture: "https://example.com/picture16.jpg",
      },
      {
        id: "17",
        name: "Felipe",
        picture: "",
      },
      {
        id: "18",
        name: "Aline",
        picture: "https://example.com/picture18.jpg",
      },
      {
        id: "19",
        name: "Rodrigo",
        picture: "",
      },
      {
        id: "20",
        name: "Isabela",
        picture: "https://example.com/picture20.jpg",
      },
    ],
    chats: ["3a7d3fb4-3833-4c0e-b09b-2af7c837a2e2", "6c78ae10-819b-4fc3-a6ef-ae4522b8c579", "477a76a5-8ccf-459a-babc-1c77dc2c890d"],
  },
};

const createLiveChatSessionSlice: StateSlice<LiveChatSessionSlice> = (
  set,
  get
) => ({
  session: null,
  startSession: (user) => {
    set((state) => {
      state.liveChatSesssion.session = {
        user: {
          id: user.id,
          name: user.name,
          picture: user.picture,
          contacts: user.contacts,
          chats: MOCK_SESSION.user.chats,
        },
      };
    });
  },
  userId: () => get().liveChatSesssion.session?.user.id,
});

export default createLiveChatSessionSlice;
