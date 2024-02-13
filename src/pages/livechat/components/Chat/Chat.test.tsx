import { render } from "@testing-library/react";
import Chat from "./Chat";

const DEFAULT_TEST_MESSAGES = ["FirstMessage", "SecondMessage", "ThirdMessage"];

describe("<Chat /> Component", () => {
  it("Should render messages received by props", () => {
    const { getByText } = render(<Chat messages={DEFAULT_TEST_MESSAGES} />);
    DEFAULT_TEST_MESSAGES.forEach((message) => {
      expect(getByText(message)).toBeInTheDocument();
    });
  });
  it("Should render messages when input is typed and sended", () => {
    const inputText = "TEST INPUT";
    const { getByText } = render(<Chat />);
    const message = getByText(inputText);
    expect(message).toBeInTheDocument();
  });
  it("Should render messages in the correct place depending on the message owner", () => {
    const senderText = "Sender TEST INPUT";
    const { getByText } = render(<Chat messages={DEFAULT_TEST_MESSAGES} />);
    const senderMessage = getByText(senderText);
    DEFAULT_TEST_MESSAGES.forEach((message) => {
      expect(getByText(message)).toHaveClass("flex-row");
    });
    expect(senderMessage).toHaveClass("flex-row-reverse");
  });
});
