import { useEffect, useRef, useState } from "react";
import Message from "./Message";

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

  return (
    <div className="w-full h-[calc(100vh-100px)] flex flex-col justify-between p-4 border border-purple-500">
      <div className="w-full h-full p-4 flex flex-col overflow-y-scroll border border-black">
        {message.map((message, index) => (
          <Message
            key={`${index}+${message.text.slice(0, 3)}`}
            date=""
            picture=""
            text={message.text}
            user="USER"
            type={index % 2 === 0 ? "sender" : "recipient"}
          />
        ))}
        <div className="border border-transparent"></div>
      </div>
      <textarea
        className="h-48 border border-red-500"
        placeholder="Digite sua mensagem"
      ></textarea>
    </div>
  );
}
