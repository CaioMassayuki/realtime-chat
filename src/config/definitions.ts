export type User = {
  id: string;
  name: string;
  password: string;
  picture: string;
  contacts: Omit<User, "password" | "contacts" | "chats">[];
  chats: string[];
};

export type ChatMessage = {
  userId: string;
  message: string;
  messageTime: string;
};

export type ChatHistory = {
  id: string;
  group: boolean;
  title: string;
  picture: string;
  users: Pick<User, "id" | 'name' | 'picture'>[];
  messages: ChatMessage[];
  lastMessage: string;
  lastMessageTime: string;
};

export type ChatResume = Omit<ChatHistory, "messages">;

export type LiveChatSession = {
  user: Omit<User, "password">;
};
