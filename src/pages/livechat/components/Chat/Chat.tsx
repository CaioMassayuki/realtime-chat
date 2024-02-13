import { useEffect, useRef, useState } from "react";
import Message from "./Message";

let messages = [
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

function randomMessage(): string {
  return messages[(Math.random() * messages.length) | 0];
}

export default function Chat() {
  const [list, setList] = useState<string[]>(messages);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setList((prevState) => [...prevState, randomMessage()]);
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className="w-full h-[calc(100vh-100px)] flex flex-col justify-between p-4 border border-purple-500">
      <div className="w-full h-full p-4 flex flex-col overflow-y-scroll border border-black">
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
          <div className="border border-transparent"></div>
      </div>
      <textarea className="h-48 border border-red-500" placeholder="AAAAA"></textarea>
    </div>
  );
}
