import userEvent from "@testing-library/user-event";
import Login from "./login";
import { renderRouterWrapper } from "../../utils/renderRouterWrapper";

describe("<Login /> Component", () => {
  const user = userEvent.setup();
  it("Should enable Entrar button when all inputs are filled", async () => {
    const { getByLabelText, getByText } = renderRouterWrapper(<Login />);
    const nameInput = getByLabelText("Seu usuário");
    const passInput = getByLabelText("Sua senha");
    const enterButton = getByText("Entrar");
    user.type(nameInput, "TESTUSER");
    user.type(passInput, "TESTPASS");
    expect(enterButton).not.toBeDisabled();
  });
  it("Should disable Enter button when not all inputs are filled", () => {
    const { getByLabelText, getByText } = renderRouterWrapper(<Login />);
    const nameInput = getByLabelText("Seu usuário");
    const enterButton = getByText("Entrar");
    user.type(nameInput, "TESTUSER");
    expect(enterButton).toBeDisabled();
  });
  it("Should redirect to Chat page if all inputs are correct and user exists", () => {
    const { getByLabelText, getByText, history } = renderRouterWrapper(
      <Login />
    );
    const nameInput = getByLabelText("Seu usuário");
    const passInput = getByLabelText("Sua senha");
    const enterButton = getByText("Entrar");
    user.type(nameInput, "TESTUSER");
    user.type(passInput, "TESTPASS");
    user.click(enterButton);
    expect(history.location.pathname).toBe("/chat");
  });
  it("Should show error message if user does not exists and not redirect to chat", () => {
    const { getByLabelText, getByText, queryByText, history } = renderRouterWrapper(<Login />)
    const nameInput = getByLabelText('Seu usuário')
    const passInput = getByLabelText('Sua senha')
    const enterButton = getByText('Entrar')
    user.type(nameInput, 'TESTUSER')
    user.type(passInput, 'TESTPASS')
    user.click(enterButton)
    expect(history.location.pathname).toBe("/");
    expect(queryByText('Usuário ou senha incorretos')).not.null
    expect(queryByText('Usuário ou senha incorretos')).toBeInTheDocument()
  });
});
