import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chat, { ChatMessage } from "./Chat";
import {
  MOCK_RECIPIENT_USER,
} from "../../../../config/constants";

const DEFAULT_TEST_MESSAGES: ChatMessage[] = [
  {
    id: "0",
    lastTime: "",
    picture: "",
    text: "FirstMessage",
    user: MOCK_RECIPIENT_USER,
  },
  {
    id: "1",
    lastTime: "",
    picture: "",
    text: "SecondMessage",
    user: MOCK_RECIPIENT_USER,
  },
  {
    id: "2",
    lastTime: "",
    picture: "",
    text: "ThirdMessage",
    user: MOCK_RECIPIENT_USER,
  },
];

describe("<Chat /> Component", () => {
  const user = userEvent.setup();
  it("Should render messages received by props", () => {
    const { getByText } = render(<Chat messages={DEFAULT_TEST_MESSAGES} />);
    DEFAULT_TEST_MESSAGES.forEach((message) => {
      expect(getByText(message.text)).toBeInTheDocument();
    });
  });
  it("Should render messages when input is typed and sended", async () => {
    const userInputText = "TEST INPUT";
    const inputPlaceholder = "Digite sua mensagem";
    const { getByText, getByPlaceholderText } = render(
      <Chat messages={DEFAULT_TEST_MESSAGES} />
    );
    await user.type(getByPlaceholderText(inputPlaceholder), userInputText);
    await user.keyboard("{Enter}");
    const message = getByText(userInputText);
    expect(message).toBeInTheDocument();
  });
  it("Should render messages in the correct place depending on the message owner", async () => {
    const senderText = "Sender TEST INPUT";
    const inputPlaceholder = "Digite sua mensagem";
    const { getByText, getByPlaceholderText } = render(
      <Chat messages={DEFAULT_TEST_MESSAGES} />
    );
    await user.type(getByPlaceholderText(inputPlaceholder), senderText);
    await user.keyboard("{Enter}");
    const senderMessage = getByText(senderText);
    DEFAULT_TEST_MESSAGES.forEach((message) => {
      expect(getByText(message.text).parentElement).toHaveClass("items-start");
    });
    expect(senderMessage.parentElement).toHaveClass("items-end");
  });
});
