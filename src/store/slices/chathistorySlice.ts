import { ChatHistory, ChatResume } from "../../config/definitions";
import { StateSlice } from "../store";

const MOCK_CHAT_HISTORY = [
  {
    id: "3a7d3fb4-3833-4c0e-b09b-2af7c837a2e2",
    group: false,
    title: "João",
    picture: "https://example.com/chat1.jpg",
    messages: [],
    users: [
      {
        id: "71f27c0a-d58e-4f12-85e4-17454fe889ef",
        name: "João",
        picture: "https://example.com/picture1.jpg",
      },
      {
        id: "4a2aa8c8-612f-4bff-b97e-9c3e69796610",
        name: "a",
        picture: "https://example.com/picture1.jpg",
      },
    ],
    lastMessage: "Olá, como vai?",
    lastMessageTime: "2024-02-12T10:00:00",
  },
  {
    id: "6c78ae10-819b-4fc3-a6ef-ae4522b8c579",
    group: true,
    title: "Sala de Equipe",
    picture: "https://example.com/team-chat.jpg",
    messages: [],
    users: [
      {
        id: "f33eae7b-c59e-453e-9274-aa2138a30fb0",
        name: "João",
        picture: "https://example.com/picture1.jpg",
      },
      {
        id: "0c21e5a0-e55e-41b4-88ec-d51d8c2d9e2e",
        name: "Cleber",
        picture: "https://example.com/picture2.jpg",
      },
      {
        id: "4a2aa8c8-612f-4bff-b97e-9c3e69796610",
        name: "a",
        picture: "https://example.com/picture1.jpg",
      },
    ],
    lastMessage: "Reunião hoje às 14h",
    lastMessageTime: "2024-02-11T15:30:00",
  },
  {
    id: "477a76a5-8ccf-459a-babc-1c77dc2c890d",
    group: false,
    title: "Chat com Maria",
    picture: "https://example.com/chat3.jpg",
    messages: [],
    users: [
      {
        id: "bdc10006-3e86-4c95-ba1b-b8342fd23a52",
        name: "Maria",
        picture: "https://example.com/picture3.jpg",
      },
      {
        id: "4a2aa8c8-612f-4bff-b97e-9c3e69796610",
        name: "a",
        picture: "https://example.com/picture1.jpg",
      },
    ],
    lastMessage: "Estou indo para a reunião agora.",
    lastMessageTime: "2024-02-12T09:45:00",
  },
  {
    id: "52d6f67d-90e8-4abf-95b3-d03c0494d497",
    group: false,
    title: "Chat com Pedro",
    picture: "https://example.com/chat4.jpg",
    messages: [],
    users: [
      {
        id: "0a8d1b9f-92f1-4858-b7c0-c80ddc0b35e1",
        name: "Pedro",
        picture: "https://example.com/picture4.jpg",
      },
    ],
    lastMessage: "Vamos almoçar juntos hoje?",
    lastMessageTime: "2024-02-11T12:15:00",
  },
  {
    id: "91d9e9f6-64ee-4d95-8607-98de7a59d441",
    group: true,
    title: "Grupo de Estudos",
    picture: "https://example.com/study-group.jpg",
    messages: [],
    users: [
      {
        id: "8bcfa52c-6de1-4640-912b-36c6e614401a",
        name: "Ana",
        picture: "https://example.com/picture5.jpg",
      },
      {
        id: "6e9b5a0b-682f-45c6-b3f7-df8c23a6d998",
        name: "Lucas",
        picture: "https://example.com/picture6.jpg",
      },
      {
        id: "3c24b380-ee48-4d97-ba76-573be7d2a08b",
        name: "Juliana",
        picture: "https://example.com/picture7.jpg",
      },
      {
        id: "276722a3-5c6e-4af8-bb71-96e228ee9a48",
        name: "Marcos",
        picture: "https://example.com/picture8.jpg",
      },
    ],
    lastMessage: "Alguém tem dúvidas sobre o material?",
    lastMessageTime: "2024-02-10T19:00:00",
  },
];

export interface ChatHistorySlice {
  chatHistory: ChatHistory[];
  retrieveChats: (ids: string[]) => ChatResume[];
}

const createChatHistorySlice: StateSlice<ChatHistorySlice> = (set, get) => ({
  chatHistory: MOCK_CHAT_HISTORY,
  retrieveChats: (ids) => {
    return get()
      .chatHistory.chatHistory.filter((chatHistory) =>
        ids.some((id) => chatHistory.id === id)
      )
      .map<ChatResume>((chatHistory) => ({
        id: chatHistory.id,
        group: chatHistory.group,
        users: chatHistory.users,
        title: chatHistory.title,
        picture: chatHistory.picture,
        lastMessage: chatHistory.lastMessage,
        lastMessageTime: chatHistory.lastMessageTime,
      }));
  },
});

export default createChatHistorySlice;
