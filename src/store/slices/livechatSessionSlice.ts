import { LiveChatSession, User } from "../../config/definitions";
import { StateSlice } from "../store";

export interface LiveChatSessionSlice {
  session: LiveChatSession | null;
  startSession: (user: Omit<User, "password">) => void;
  userId: () => string | undefined;
}

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
          chats: user.chats,
        },
      };
    });
  },
  userId: () => get().liveChatSesssion.session?.user.id,
});

export default createLiveChatSessionSlice;
