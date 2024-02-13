import { useState } from "react";
import Message from "./Message";

export default function Chat() {
  const [list, setList] = useState<string[]>([]);

  return (
    <div className="w-full h-[calc(100vh-100px)] flex flex-col justify-between p-4 border border-purple-500">
      <div className="w-full h-full p-4 flex flex-col overflow-y-auto border border-black">
        {list.map((item, index) => (
          <Message
            key={`${index}+${item.slice(0, 3)}`}
            date=""
            picture=""
            text={item}
            user="USER"
            type={index % 2 === 0 ? "sender" : "recipient"}
          />
        ))}
      </div>
      <textarea className="h-48 border border-red-500" placeholder="AAAAA"></textarea>
    </div>
  );
}
