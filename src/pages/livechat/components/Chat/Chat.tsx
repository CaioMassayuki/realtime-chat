import { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { KEY_CODES, MOCK_SENDER_USER } from "../../../../config/constants";
import { v4 as uuid } from "uuid";

export type ChatMessage = {
  id: string;
  user: string;
  text: string;
  picture: string;
  lastTime: string;
};

export type ChatProps = {
  messages: ChatMessage[];
};

export default function Chat({ messages }: ChatProps) {
  const [message, setMessage] = useState<ChatMessage[]>(messages);
  const [inputMessage, setInputMessage] = useState<string>();
  const chatAnchor = useRef<HTMLDivElement>(null)

  // function randomMessage(): ChatMessage {
  //   return messages[(Math.random() * messages.length) | 0];
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setMessage((prevState) => [...prevState, randomMessage()]);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  useEffect(() => {
    if(chatAnchor.current){
      chatAnchor.current.scrollIntoView(true)
    }
  }, [])

  return (
    <div className="w-full h-[calc(100vh-100px)] flex flex-col justify-between p-4 border border-purple-500">
      <div className="w-full h-full p-4 flex flex-col overflow-y-scroll border border-black">
        {message.map((message, index) => (
          <Message
            key={`${index}+${message.text.slice(0, 3)}`}
            date=""
            picture=""
            text={message.text}
            user={message.user}
            type={message.user === MOCK_SENDER_USER ? "sender" : "recipient"}
          />
        ))}
        <div ref={chatAnchor} className="border border-transparent"></div>
      </div>
      <textarea
        className="h-48 border border-red-500"
        placeholder="Digite sua mensagem"
        defaultValue={inputMessage}
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyDown={(e) => {
          if (KEY_CODES.ENTER.includes(e.key)) {
            e.preventDefault();
            if (inputMessage) {
              setInputMessage("");
              setMessage([
                ...message,
                {
                  id: uuid(),
                  lastTime: "",
                  picture: "",
                  user: MOCK_SENDER_USER,
                  text: inputMessage,
                },
              ]);
            }
          }
        }}
      ></textarea>
    </div>
  );
}
