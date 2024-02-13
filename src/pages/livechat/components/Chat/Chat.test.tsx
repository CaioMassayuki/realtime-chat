import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Chat, { ChatMessage } from "./Chat";

const DEFAULT_TEST_MESSAGES: ChatMessage[] = [
  {
    id: "0",
    lastTime: "",
    picture: "",
    text: "FirstMessage",
    user: "TEST_RECIPIENT",
  },
  {
    id: "1",
    lastTime: "",
    picture: "",
    text: "SecondMessage",
    user: "TEST_RECIPIENT",
  },
  {
    id: "2",
    lastTime: "",
    picture: "",
    text: "ThirdMessage",
    user: "TEST_RECIPIENT",
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
  it("Should render messages when input is typed and sended", () => {
    const userInputText = "TEST INPUT";
    const inputPlaceholder = "Digite sua mensagem";
    const { getByText, getByPlaceholderText } = render(
      <Chat messages={DEFAULT_TEST_MESSAGES} />
    );
    user.type(getByPlaceholderText(inputPlaceholder), userInputText);
    const message = getByText(userInputText);
    expect(message).toBeInTheDocument();
  });
  it("Should render messages in the correct place depending on the message owner", () => {
    const senderText = "Sender TEST INPUT";
    const { getByText } = render(<Chat messages={DEFAULT_TEST_MESSAGES} />);
    const senderMessage = getByText(senderText);
    DEFAULT_TEST_MESSAGES.forEach((message) => {
      expect(getByText(message.text)).toHaveClass("flex-row");
    });
    expect(senderMessage).toHaveClass("flex-row-reverse");
  });
});
