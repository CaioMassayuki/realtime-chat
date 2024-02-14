import userEvent from "@testing-library/user-event";
import Login from "./login";
import { renderRouterWrapper } from "../../utils/renderRouterWrapper";
import useLiveChatStore from "../../store/store";
import { User } from "../../config/definitions";

const MOCK_STORE_USERS: User[] = [
  {
    id: "0",
    name: "TESTUSER",
    password: "TESTPASS",
    contacts: [],
    picture: "",
  },
];

describe("<Login /> Component", () => {
  const initialStoreState = useLiveChatStore.getState();
  beforeEach(() => {
    useLiveChatStore.setState({
      ...initialStoreState,
      users: { ...initialStoreState.users, users: MOCK_STORE_USERS },
    });
  });

  const user = userEvent.setup();
  it("Should enable Entrar button when all inputs are filled", async () => {
    const { getByLabelText, getByText } = renderRouterWrapper(<Login />);
    const nameInput = getByLabelText("Seu usuário");
    const passInput = getByLabelText("Sua senha");
    const enterButton = getByText("Entrar");
    await user.type(nameInput, "TESTUSER");
    await user.type(passInput, "TESTPASS");
    expect(enterButton).not.toBeDisabled();
  });
  it("Should disable Enter button when not all inputs are filled", async () => {
    const { getByLabelText, getByText } = renderRouterWrapper(<Login />);
    const nameInput = getByLabelText("Seu usuário");
    const enterButton = getByText("Entrar");
    await user.type(nameInput, "TESTUSER");
    expect(enterButton).toBeDisabled();
  });
  it("Should redirect to Chat page if all inputs are correct and user exists", async () => {
    const { getByLabelText, getByText, history } = renderRouterWrapper(
      <Login />
    );
    const nameInput = getByLabelText("Seu usuário");
    const passInput = getByLabelText("Sua senha");
    const enterButton = getByText("Entrar");
    await user.type(nameInput, MOCK_STORE_USERS[0].name);
    await user.type(passInput, MOCK_STORE_USERS[0].password);
    await user.click(enterButton);
    expect(history.location.pathname).toBe("/chat");
  });
  it("Should show error message if user does not exists and not redirect to chat", async () => {
    const { getByLabelText, getByText, queryByText, history } =
      renderRouterWrapper(<Login />);
    const nameInput = getByLabelText("Seu usuário");
    const passInput = getByLabelText("Sua senha");
    const enterButton = getByText("Entrar");
    await user.type(nameInput, MOCK_STORE_USERS[0].name);
    await user.type(passInput, 'WRONGPASSWORD');
    await user.click(enterButton);
    expect(history.location.pathname).toBe("/");
    expect(queryByText("Usuário ou senha incorretos!")).not.null;
    expect(queryByText("Usuário ou senha incorretos!")).toBeInTheDocument();
  });
});
