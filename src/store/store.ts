// import { StateCreator, create } from "zustand";
// import createLiveChatSessionSlice, { LiveChatSessionSlice } from "./slices/livechatSessionSlice";
// import createChatHistorySlice, { ChatHistorySlice } from "./slices/chathistorySlice";
// import createUsersSlice, { UsersSlice } from "./slices/usersSlice";

// export interface CombinedState {
//   users: UsersSlice;
//   liveChatSesssion: LiveChatSessionSlice;
//   chatHistory: ChatHistorySlice;
// }

// export type StateSlice<T> = StateCreator<CombinedState, [], [], T>;

// const useLiveChatStore = create<CombinedState>()((...api) => ({
//     users: createUsersSlice(...api),
//     liveChatSesssion: createLiveChatSessionSlice(...api),
//     chatHistory: createChatHistorySlice(...api),
// }));

// export default useLiveChatStore;


import { StateCreator, create } from "zustand";
import { immer } from "zustand/middleware/immer";
import createLiveChatSessionSlice, { LiveChatSessionSlice } from "./slices/livechatSessionSlice";
import createChatHistorySlice, { ChatHistorySlice } from "./slices/chathistorySlice";
import createUsersSlice, { UsersSlice } from "./slices/usersSlice";

export interface CombinedState {
  users: UsersSlice;
  liveChatSesssion: LiveChatSessionSlice;
  chatHistory: ChatHistorySlice;
}

export type StateSlice<T> = StateCreator<CombinedState, [['zustand/immer', never]], [], T>;

const useLiveChatStore = create<CombinedState>()(immer((...api) => ({
    users: createUsersSlice(...api),
    liveChatSesssion: createLiveChatSessionSlice(...api),
    chatHistory: createChatHistorySlice(...api),
})));

export default useLiveChatStore;
