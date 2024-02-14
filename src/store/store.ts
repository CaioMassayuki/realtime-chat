import { StateCreator, create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import createLiveChatSessionSlice, {
  LiveChatSessionSlice,
} from "./slices/livechatSessionSlice";
import createChatHistorySlice, {
  ChatHistorySlice,
} from "./slices/chathistorySlice";
import createUsersSlice, { UsersSlice } from "./slices/usersSlice";

export interface CombinedState {
  users: UsersSlice;
  liveChatSesssion: LiveChatSessionSlice;
  chatHistory: ChatHistorySlice;
}

export type StateSlice<T> = StateCreator<
  CombinedState,
  [["zustand/immer", never], ["zustand/devtools", never]],
  [["zustand/persist", Partial<T>]],
  T
>;

const useLiveChatStore = create<CombinedState>()(
  devtools(
    persist(
      immer((...api) => ({
        users: createUsersSlice(...api),
        liveChatSesssion: createLiveChatSessionSlice(...api),
        chatHistory: createChatHistorySlice(...api),
      })),
      {
        name: "liveChatStore",
        storage: createJSONStorage(() => sessionStorage),
        merge: (persistedState, currentState) => {
          const typedPersistedState = persistedState as
            | CombinedState
            | undefined;
          return {
            users: {
              ...currentState.users,
              ...(typedPersistedState?.users || {}),
            },
            chatHistory: {
              ...currentState.chatHistory,
              ...(typedPersistedState?.chatHistory || {}),
            },
            liveChatSesssion: {
              ...currentState.liveChatSesssion,
              ...(typedPersistedState?.liveChatSesssion || {}),
            },
          };
        },
      }
    ),
    { name: "global-store" }
  )
);

export default useLiveChatStore;
