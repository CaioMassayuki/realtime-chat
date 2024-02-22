import {
  MOCK_RECIPIENT_USER,
  MOCK_SENDER_USER,
  MOCK_USERS,
} from "../../config/constants";
import { MOCK_SESSION } from "../../store/slices/livechatSessionSlice";
import useLiveChatStore from "../../store/store";
import Chat from "./components/Chat/Chat";
import ContactsList from "./components/ContactsList/ContactsList";
import { v4 as uuid } from "uuid";

const DEFAULT_TEST_MESSAGES = [
  "I wondered why the baseball was getting bigger. Then it hit me.",
  "Police were called to a day care, where a three-year-old was resisting a rest.",
  "Did you hear about the guy whose whole left side was cut off? He’s all right now.",
  "The roundest knight at King Arthur’s round table was Sir Cumference.",
  "To write with a broken pencil is pointless.",
  "When fish are in schools they sometimes take debate.",
  "The short fortune teller who escaped from prison was a small medium at large.",
  "A thief who stole a calendar… got twelve months.",
  "A thief fell and broke his leg in wet cement. He became a hardened criminal.",
  "Thieves who steal corn from a garden could be charged with stalking.",
  "When the smog lifts in Los Angeles , U. C. L. A.",
  "The math professor went crazy with the blackboard. He did a number on it.",
  "The professor discovered that his theory of earthquakes was on shaky ground.",
  "The dead batteries were given out free of charge.",
  "If you take a laptop computer for a run you could jog your memory.",
  "A dentist and a manicurist fought tooth and nail.",
  "A bicycle can’t stand alone; it is two tired.",
  "A will is a dead giveaway.",
  "Time flies like an arrow; fruit flies like a banana.",
  "A backward poet writes inverse.",
  "In a democracy it’s your vote that counts; in feudalism, it’s your Count that votes.",
  "A chicken crossing the road: poultry in motion.",
  "If you don’t pay your exorcist you can get repossessed.",
  "With her marriage she got a new name and a dress.",
  "Show me a piano falling down a mine shaft and I’ll show you A-flat miner.",
  "When a clock is hungry it goes back four seconds.",
  "The guy who fell onto an upholstery machine was fully recovered.",
  "A grenade fell onto a kitchen floor in France and resulted in Linoleum Blownapart.",
  "You are stuck with your debt if you can’t budge it.",
  "Local Area Network in Australia : The LAN down under.",
  "He broke into song because he couldn’t find the key.",
  "A calendar’s days are numbered.",
];

export const MOCK_CONTACTS = [
  {
    id: uuid(),
    user: MOCK_USERS[0],
    picture: "",
    lastMessage: "Last Message 1",
    lastMessageDate: "",
  },
  {
    id: uuid(),
    user: MOCK_USERS[1],
    picture: "",
    lastMessage: "Last Message 2",
    lastMessageDate: "",
  },
  {
    id: uuid(),
    user: MOCK_USERS[2],
    picture: "",
    lastMessage: "Last Message 3",
    lastMessageDate: "",
  },
];

export type ChatMessage = {
  id: string;
  user: string;
  text: string;
  picture: string;
  lastTime: string;
};

function stringToChatMessage() {
  return DEFAULT_TEST_MESSAGES.map((message, index) => ({
    id: `${index}`,
    user: index % 2 === 0 ? MOCK_SENDER_USER : MOCK_RECIPIENT_USER,
    text: message,
    picture: "",
    lastTime: "",
  }));
}

export default function Livechat() {
  const liveChatState = useLiveChatStore.getState()
  const chats = liveChatState.chatHistory.retrieveChats(MOCK_SESSION.user.chats)
  console.log(chats)

  return (
    <div className="h-screen flex flex-col">
      <header className="text-white flex items-center p-2 bg-black border border-orange-400 w-full h-20">
        <h1>LIVECHAT</h1>
      </header>
      <div className="flex h-full p-4">
        {/* <aside className="p-4 border border-yellow-500 h-full w-72">
          <section className="flex flex-col items-center p-2">
            <h3>SIDEBAR</h3>
          </section>
        </aside> */}
        <main className="flex w-full">
          <section className="w-2/12 p-4 border border-green-500">
            <ContactsList chats={chats} />
          </section>
          <section className="w-10/12 flex border border-blue-500">
            <Chat messages={stringToChatMessage()} />
            {/* <div className="w-72 p-4 border border-black">SIDE INFO</div> */}
          </section>
        </main>
      </div>
    </div>
  );
}
