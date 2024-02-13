import userEvent from "@testing-library/user-event";
import Register from "./register";
import { renderRouterWrapper } from "../../utils/renderRouterWrapper";

describe("<Register /> Component", () => {
  const user = userEvent.setup();
  it("Should enable Cadastrar button if the user input all the form inputs", async () => {
    const { getByLabelText, getByText } = renderRouterWrapper(<Register />);
    const nameInput = getByLabelText("Nome");
    const passInput = getByLabelText("Senha");
    const confirmPassInput = getByLabelText("Confirme sua senha");
    const registerButton = getByText('Cadastrar')
    await user.type(nameInput, "TEST");
    await user.type(passInput, "TESTPASS");
    await user.type(confirmPassInput, "TESTPASS");
    expect(registerButton).not.toBeDisabled()
  });
  it("Should disable Cadastrar button if the user didnt input all the form inputs", async () => {
    const { getByLabelText, getByText } = renderRouterWrapper(<Register />);
    const nameInput = getByLabelText("Nome");
    const registerButton = getByText('Cadastrar')
    await user.type(nameInput, "TEST");
    expect(registerButton).toBeDisabled()
  });
  it("Should give a warning when the password dont match", async () => {
    const { getByLabelText, getByText } = renderRouterWrapper(<Register />);
    const passInput = getByLabelText("Senha");
    const confirmPassInput = getByLabelText("Confirme sua senha");
    await user.type(passInput, "PASSWORD");
    await user.type(confirmPassInput, "WRONGPASSWORD");
    expect(confirmPassInput).toHaveClass('border-red-500 hover:border-red-500 focus:outline-red-500')
    expect(confirmPassInput.parentElement).toHaveClass('text-red-500')
  });
  it("Should register new user and and return to login page", async () => {
    const { getByLabelText, getByText, history } = renderRouterWrapper(<Register />);
    const nameInput = getByLabelText("Nome");
    const passInput = getByLabelText("Senha");
    const confirmPassInput = getByLabelText("Confirme sua senha");
    const registerButton = getByText('Cadastrar')
    await user.type(nameInput, "TEST");
    await user.type(passInput, "TESTPASS");
    await user.type(confirmPassInput, "TESTPASS");
    await user.click(registerButton)
    expect(history.location.pathname).toBe('/')
  });
});
