export type User = {
  id: string;
  name: string;
  password: string;
  picture: string;
  contacts: Omit<User, "password">[];
  chats: Pick<ChatHistory, "id">[];
};

export type ChatMessage = {
  userId: Pick<User, "id">;
  message: string;
  messageTime: string;
};

export type ChatHistory = {
  id: string;
  group: boolean;
  title?: string;
  picture?: string;
  users: Pick<User, "id">[];
  messages: ChatMessage[];
  lastMessage: ChatMessage;
  lastMessageTime: string;
};

export type LiveChatSession = {
  user: Omit<User, "password">;
};
