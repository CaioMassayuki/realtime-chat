import { LiveChatSession } from "../../config/definitions";
import { StateSlice } from "../store";

export interface LiveChatSessionSlice {
    session: LiveChatSession | null
}

const createLiveChatSessionSlice: StateSlice<LiveChatSessionSlice> = (set, get) => ({
  session: null,
});

export default createLiveChatSessionSlice;
