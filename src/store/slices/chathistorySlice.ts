import { ChatHistory } from "../../config/definitions";
import { StateSlice } from "../store";

export interface ChatHistorySlice {
    chatHistory: ChatHistory[]
}

const createChatHistorySlice: StateSlice<ChatHistorySlice> = (set, get) => ({
  chatHistory: [],
});

export default createChatHistorySlice;
